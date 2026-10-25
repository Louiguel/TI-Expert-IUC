
# Guide Git et GitHub

## 1. Dépôt

Le dépôt GitHub central contient le code source et la documentation.

## 2. Branche principale

main contient la version stable du projet.

## 3. Branches de travail

- feature/coordination
- feature/vibe2244
- feature/formations

## 4. Cycle de travail

1. Se placer sur sa branche.
2. Récupérer les modifications récentes de main.
3. Modifier les fichiers.
4. Examiner les changements.
5. Créer un commit.
6. Envoyer la branche sur GitHub.
7. Ouvrir une Pull Request.
8. Faire vérifier le code.
9. Fusionner après validation.

## 5. Commandes essentielles

git status
git branch
git switch main
git pull --ff-only origin main
git switch feature/coordination
git add .
git diff --cached
git commit -m "feat: description de la modification"
git push
