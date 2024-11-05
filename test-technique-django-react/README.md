À propos de nous
NUTRITECH Agro est une société marocaine spécialisée dans la fabrication et la commercialisation d'engrais. Avec environ 30 représentants commerciaux couvrant tout le territoire marocain, NUTRITECH Agro s'efforce de répondre aux besoins du secteur agricole en offrant une large gamme de produits pour l'optimisation de la qualité, de la production et de la rentabilité des cultures.

Notre gamme de produits comprend :

Engrais foliaires liquides et solides
Régulateurs de pH
Engrais cristallins
Correcteurs de carences et chélatés
Engrais organiques
Acides aminés
Amendements du sol, notamment avec des acides humiques, etc.
Depuis sa création, NUTRITECH Agro accompagne les agriculteurs marocains en offrant des produits compétitifs, un support technique et un service clientèle de qualité. Notre objectif est de promouvoir une agriculture sûre et hautement productive.

Objectif de l'application
Cette application a été développée pour NUTRITECH Agro afin de faciliter la gestion de l'inventaire de produits, le suivi des commandes, et le service client. Grâce à cette application, les représentants commerciaux et les clients peuvent :

Parcourir et consulter les produits disponibles avec des informations détaillées,
Ajouter des produits au panier et passer commande,
Suivre l'état des commandes et recevoir des notifications de mise à jour.
L'application vise à améliorer la communication entre NUTRITECH Agro et ses clients en rendant l'expérience d'achat plus accessible et interactive, et en permettant un accès rapide aux informations sur les produits et services offerts.

Structure et Logique du Projet
Backend : Développé avec Django et Django REST Framework, il gère les données des produits, les utilisateurs, et les commandes. L'API REST fournit les données au frontend.
Frontend : Utilise React et React-Bootstrap pour un affichage dynamique des produits et une interface utilisateur réactive.
Visualisation des Designs
Les maquettes et prototypes du projet sont disponibles sur Figma. Vous pouvez y consulter le design et les flux utilisateur de l'application.

Installation
Clonez le dépôt :
bash
Copier le code
git clone https://github.com/abderrahim07/nutritech-argo.git
Installez les dépendances du backend et du frontend :
bash
Copier le code
cd backend
pip install -r requirements.txt
cd ../frontend
npm install
Exécution de l'Application
Lancez le backend :
bash
Copier le code
cd backend
python manage.py runserver
Lancez le frontend :
bash
Copier le code
cd frontend
npm start
Accédez à l'application à http://localhost:3000 dans votre navigateur pour commencer.

Fonctionnalités Clés
Affichage des produits : Voir les images, les noms, les prix, et les évaluations des produits.
Ajout au panier : Ajouter des produits au panier et gérer les commandes.
Système d'évaluation : Affichage des notes et des avis des utilisateurs sur chaque produit.
Technologies Utilisées
Frontend : React, React-Bootstrap, React Router
Backend : Django, Django REST Framework
Problèmes et Solutions
Pagination : Mise en place d'une pagination efficace pour améliorer la vitesse de chargement des produits.
Gestion d'état global : Utilisation de React Context pour gérer le panier de manière globale dans l'application.
Améliorations Futures
Intégrer un système de paiement sécurisé pour les commandes.
Ajouter un système de recommandations de produits basé sur les préférences des utilisateurs.
Auteur
Nom : EL AZHARI ABDERRAHIM
Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.