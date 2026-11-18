SKALA · MW CLICKER — COMPILATION WINDOWS DANS LE CLOUD
=====================================================

Ce dossier permet de faire compiler MW Clicker en .exe Windows par GitHub
Actions, sans installer Node.js sur un PC du lycée.

IMPORTANT
---------
Il faut avoir accès à un compte GitHub et pouvoir créer/modifier un dépôt.
La compilation se fait sur les serveurs GitHub. Elle n'est pas faite sur le
PC du lycée.

ÉTAPES
------
1. Crée un nouveau dépôt GitHub (par exemple : MW-Clicker-Windows).
2. Décompresse cette archive sur un appareil où tu peux envoyer des fichiers.
3. Envoie TOUS les fichiers et dossiers de cette archive à la racine du dépôt,
   en conservant le dossier .github.
4. Ouvre l'onglet Actions du dépôt.
5. Sélectionne "Build MW Clicker Windows EXE".
6. Clique sur "Run workflow".
7. Quand l'exécution est terminée, ouvre-la et récupère l'artefact
   "MW-Clicker-Windows-Portable".
8. Décompresse l'artefact : il contient le fichier .exe portable.

À SAVOIR
--------
- La compilation distante peut prendre plusieurs minutes.
- Une connexion Internet reste nécessaire pour Supabase et les ressources CDN.
- Cette version ne rend pas le jeu hors ligne.
- Le .exe ne protège pas le code JavaScript côté client.
- Ne mets jamais de clé Supabase service_role dans l'application.
- Teste les sauvegardes, notamment les super-renaissances, avant distribution.

Le fichier MW-clicker.js fourni est copié sans modification.
