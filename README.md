#Intro express js

- Lancer votre serveur sur le port 3300,
- Faire une route  get '/' pour afficher l'index.html à l'adresse suivante : monadressip:3300,
- Créer un dossier 'public' avec app.js et style.css,
- Servir app.js et style.css (ils doivent être liées à index.html),
- Créer un objet comme ci-dessous sur le serveur :
```javascript
	var user ={
		login: 'monlongin',
		mdp: 'mon-mot-de-passe',
	}
```
- Créer deux input sur votre index.html (login & mdp),
- Envoyer depuis votre coté client, les informations rentré dans l'input login et l'input mdp, au serveur vers la route post '/auth',
- Une fois les informations récupérer au niveau de la route post '/auth', les vérifier avec l'objet 'user' stocké sur le serveur,  renvoyé un message d'erreur ou de succès.
- Si erreur le signaler coté client,
- Si succès rediriger vers une page 'myaccount.html'.
- Le design de votre page index.html doit être un copy-cat de la page de connection de github [github login](https://github.com/login) **FRAMEWORK CSS INTERDIT !**
- Crypter votre mot de passe coté serveur avec bcrypt js.
