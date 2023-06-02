const fs = require('fs');
const { Client, MessageAttachment } = require('discord.js');
const config = require('./config.json');

const client = new Client();

client.once('ready', () => {
  console.log('Le bot est prêt !');
});

client.on('message', async (message) => {
  if (message.content === '!upload') {
    const imageFiles = fs.readdirSync(config.imageDirectory);

    imageFiles.sort((fileA, fileB) => {
      const fileASize = fs.statSync(`${config.imageDirectory}/${fileA}`).size;
      const fileBSize = fs.statSync(`${config.imageDirectory}/${fileB}`).size;
      return fileASize - fileBSize;
    });

    for (const file of imageFiles) {
      const filePath = `${config.imageDirectory}/${file}`;
      const fileExtension = getFileExtension(file);
    
      if (config.allowedFileTypes.includes(fileExtension)) {
        const attachment = new MessageAttachment(filePath);
        await message.channel.send(attachment);
        await new Promise((resolve) => setTimeout(resolve, config.uploadDelay));
    
        const uploadedFilePath = `${config.uploadedFilesDirectory}/${file}`;
    
        // Vérifier si le fichier existe avant de le déplacer
        if (fs.existsSync(filePath)) {
          fs.renameSync(filePath, uploadedFilePath);
          console.log(`Le fichier ${file} a été déplacé vers ${uploadedFilePath}.`);
    
          if (config.deleteOriginalFiles) {
            fs.unlinkSync(filePath);
            console.log(`Le fichier d'origine ${file} a été supprimé.`);
          }
        } else {
          console.log(`Le fichier ${file} n'existe pas ou n'est pas accessible.`);
        }
      } else {
        console.log(`Le fichier ${file} n'est pas d'un type autorisé.`);
        // Vous pouvez ajouter ici votre logique pour gérer les fichiers non autorisés, par exemple les ignorer.
      }
    }
    
  }
});

client.login(config.token);

function getFileExtension(filename) {
  const fileParts = filename.split('.');
  if (fileParts.length > 1) {
    return `.${fileParts[fileParts.length - 1].toLowerCase()}`;
  }
  return '';
}

