# Ajout d'un formulaire de contact

- Auteur : vibe2244
- Branche : feature/vibe2244
- Type : nouvelle fonctionnalité

## 1. Objectif

Permettre au visiteur d'envoyer une demande d'information sur les
formations directement depuis la section Contact du site.

## 2. Fichiers modifiés

| Fichier | Modification |
|---|---|
| index.html | Ajout du formulaire (nom, e-mail, formation, message) dans la section `#contact`. |
| css/style.css | Styles du formulaire, des messages d'erreur et du message de confirmation, adaptation mobile. |
| js/main.js | Validation des champs en JavaScript et affichage d'un message de confirmation. |

## 3. Fonctionnement

- Chaque champ est vérifié quand on le quitte et à l'envoi :
  - nom : 2 caractères minimum ;
  - e-mail : format valide ;
  - formation : choix obligatoire ;
  - message : 10 caractères minimum.
- Les champs invalides passent en rouge avec un message d'erreur.
- Si tout est valide, un message de confirmation s'affiche et le formulaire est vidé.
- Le site étant statique, aucun message n'est réellement envoyé
  (démonstration côté navigateur uniquement).

## 4. Captures d'écran

### Formulaire affiché

![Formulaire de contact](captures/01-formulaire-contact.png)

### Erreurs de validation (envoi d'un formulaire vide)

![Erreurs de validation](captures/02-erreurs-validation.png)

### Message de confirmation (formulaire valide)

![Message de confirmation](captures/03-message-confirmation.png)

### Version mobile (390 px)

![Version mobile](captures/04-version-mobile.png)

## 5. Tests effectués

| Test | Résultat |
|---|---|
| Affichage du formulaire (bureau) | Réussi |
| Envoi d'un formulaire vide : erreurs affichées | Réussi |
| Envoi d'un formulaire valide : confirmation affichée | Réussi |
| Affichage mobile sans défilement horizontal | Réussi |
| Console JavaScript sans erreur | Réussi |
