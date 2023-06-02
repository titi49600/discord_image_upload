Bot Discord d'Upload d'Images
Ce bot Discord, développé en utilisant Node.js et Discord.js, permet d'uploader des images stockées localement vers un salon spécifié sur un serveur Discord. Le bot prend en charge la configuration à l'aide d'un fichier config.json où vous pouvez définir le token du bot, l'ID du salon de destination, l'emplacement des images, et d'autres options.

Configuration
Clonez ce dépôt vers votre environnement local.

Installez les dépendances en exécutant npm install.

Configurez le bot en modifiant le fichier config.json. Les clés disponibles sont :

"token" : le token du bot Discord. Obtenez-le en créant une nouvelle application et en configurant un bot sur le portail des développeurs Discord.
"channelId" : l'ID du salon de destination où les images seront uploadées.
"imageDirectory" : l'emplacement local où les images sont stockées.
"uploadDelay" : le délai en millisecondes entre chaque upload d'image.
"allowedFileTypes" : les extensions de fichiers autorisées à uploader.
"uploadedFilesDirectory" : le dossier de destination où les fichiers uploadés seront déplacés.
"deleteOriginalFiles" : une option booléenne pour spécifier si les fichiers d'origine doivent être supprimés après leur upload.
Assurez-vous d'avoir Node.js installé sur votre machine.

Exécutez le bot en exécutant node bot.js.

Utilisation
Invitez le bot dans votre serveur Discord.
Assurez-vous que le bot dispose des autorisations nécessaires pour envoyer des messages dans le salon de destination.
Utilisez la commande !upload dans le salon souhaité pour démarrer l'upload des images.
