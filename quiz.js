// ============================================================
//  TECHNOVORE HACKATHON — NIVEAU 2 — QUIZ ENGINE
//  Auteur : Entraîneur IA / ESATIC × C2E
// ============================================================

'use strict';

// ─────────────────────────────────────────────
//  BANK DE QUESTIONS — 100 QCM NIVEAU 2
// ─────────────────────────────────────────────
const QUESTION_BANK = [
  // ── MICROSERVICES & ARCHITECTURE (1-33) ──
  {
    id: 1, category: "Microservices",
    q: "Quelle est la caractéristique fondamentale d'un microservice ?",
    opts: ["Un composant monolithique gérant toute l'application", "Un service autonome, déployable et scalable indépendamment", "Une bibliothèque partagée entre plusieurs applications", "Un module interne d'une application monolithique"],
    ans: 1
  },
  {
    id: 2, category: "Microservices",
    q: "Dans une architecture microservices, quel composant joue le rôle de point d'entrée unique pour tous les clients ?",
    opts: ["Message Broker", "Service Registry", "API Gateway", "Load Balancer DNS"],
    ans: 2
  },
  {
    id: 3, category: "API REST",
    q: "Quel code HTTP est retourné lorsqu'une ressource est créée avec succès ?",
    opts: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
    ans: 1
  },
  {
    id: 4, category: "API REST",
    q: "Quelle méthode HTTP est idempotente et permet de remplacer complètement une ressource ?",
    opts: ["POST", "PATCH", "PUT", "DELETE"],
    ans: 2
  },
  {
    id: 5, category: "API REST",
    q: "Que représente le code HTTP 401 ?",
    opts: ["Ressource introuvable", "Accès interdit (permissions insuffisantes)", "Non authentifié (token manquant ou invalide)", "Trop de requêtes"],
    ans: 2
  },
  {
    id: 6, category: "Microservices",
    q: "Le pattern 'Circuit Breaker' dans les microservices sert à :",
    opts: ["Chiffrer les communications inter-services", "Éviter les appels en cascade lors d'une panne d'un service", "Gérer la persistance des données", "Équilibrer la charge entre instances"],
    ans: 1
  },
  {
    id: 7, category: "Microservices",
    q: "Qu'est-ce que le 'Service Discovery' ?",
    opts: ["Un mécanisme permettant aux services de se trouver dynamiquement sur le réseau", "Un outil de monitoring des microservices", "Un protocole de sécurité inter-services", "Une méthode de test unitaire pour services"],
    ans: 0
  },
  {
    id: 8, category: "Microservices",
    q: "RabbitMQ est un exemple de :",
    opts: ["Base de données relationnelle distribuée", "Message Broker (courtier de messages)", "Serveur web haute performance", "Outil d'orchestration de conteneurs"],
    ans: 1
  },
  {
    id: 9, category: "Architecture",
    q: "La 'scalabilité horizontale' consiste à :",
    opts: ["Augmenter les ressources (RAM, CPU) d'un seul serveur", "Ajouter des instances supplémentaires d'un service", "Optimiser le code pour réduire la consommation", "Déplacer les données vers un serveur plus puissant"],
    ans: 1
  },
  {
    id: 10, category: "API REST",
    q: "CORS (Cross-Origin Resource Sharing) est :",
    opts: ["Un protocole de chiffrement des APIs", "Un mécanisme contrôlant l'accès aux ressources depuis d'autres origines", "Un format d'échange de données", "Un standard d'authentification OAuth"],
    ans: 1
  },
  {
    id: 11, category: "Architecture",
    q: "Quelle est la différence principale entre REST et SOAP ?",
    opts: ["REST est plus ancien que SOAP", "SOAP utilise JSON tandis que REST utilise XML", "REST est sans état et léger, SOAP utilise XML avec des standards formels stricts", "SOAP ne peut pas fonctionner sur HTTP"],
    ans: 2
  },
  {
    id: 12, category: "Microservices",
    q: "Dans les microservices, comment les services communiquent-ils de façon asynchrone ?",
    opts: ["Via des appels HTTP directs synchrones", "Via une file de messages (Message Queue / Event Bus)", "Via des appels SSH chiffrés", "Via des procédures stockées en base de données"],
    ans: 1
  },
  {
    id: 13, category: "Architecture",
    q: "Le principe 'Separation of Concerns' stipule que :",
    opts: ["Tout le code doit être dans un seul fichier pour faciliter la maintenance", "Chaque module doit gérer une responsabilité distincte et bien définie", "Les préoccupations de sécurité doivent être centralisées", "Les tests doivent être séparés du code de production uniquement"],
    ans: 1
  },
  {
    id: 14, category: "API REST",
    q: "GraphQL, comparé à REST, permet de :",
    opts: ["Interroger uniquement des bases de données SQL", "Demander exactement les données nécessaires, ni plus ni moins", "Fonctionner sans serveur HTTP", "Remplacer entièrement Docker dans les déploiements"],
    ans: 1
  },
  {
    id: 15, category: "Architecture",
    q: "Le 'couplage faible' (loose coupling) dans les microservices signifie :",
    opts: ["Les services partagent obligatoirement la même base de données", "Les services peuvent évoluer indépendamment avec des dépendances minimales", "Les services utilisent tous le même langage de programmation", "Les services sont déployés sur la même machine physique"],
    ans: 1
  },
  {
    id: 16, category: "Architecture",
    q: "Qu'est-ce que l'architecture Event-Driven ?",
    opts: ["Une architecture où les services se lancent à des heures programmées", "Une architecture où les services communiquent via des événements publiés/consommés", "Une architecture monolithique utilisant des callbacks JavaScript", "Un pattern de déploiement basé sur les logs système"],
    ans: 1
  },
  {
    id: 17, category: "API REST",
    q: "Un webhook se distingue d'une API REST classique car :",
    opts: ["Il utilise le protocole FTP au lieu de HTTP", "Il est déclenché par le serveur pour notifier le client d'un événement (push)", "Il nécessite une authentification par certificat SSL obligatoire", "Il fonctionne uniquement avec les bases de données NoSQL"],
    ans: 1
  },
  {
    id: 18, category: "Microservices",
    q: "Le pattern 'Saga' dans les microservices gère :",
    opts: ["La haute disponibilité des bases de données distribuées", "Les transactions longues et distribuées entre plusieurs services", "La compression des données échangées entre services", "La sécurité des communications inter-services"],
    ans: 1
  },
  {
    id: 19, category: "API REST",
    q: "JWT (JSON Web Token) est utilisé pour :",
    opts: ["Compresser les réponses JSON des APIs", "L'authentification et l'autorisation stateless via un token auto-porteur", "Chiffrer les bases de données relationnelles", "Documenter automatiquement les endpoints REST"],
    ans: 1
  },
  {
    id: 20, category: "Architecture",
    q: "Swagger / OpenAPI sert principalement à :",
    opts: ["Déployer automatiquement des microservices en production", "Documenter, décrire et tester des APIs REST de façon standardisée", "Gérer les files de messages entre services", "Orchestrer des conteneurs Docker en production"],
    ans: 1
  },
  {
    id: 21, category: "Microservices",
    q: "Un microservice 'stateless' (sans état) signifie que :",
    opts: ["Il ne conserve aucun état entre les requêtes — chaque requête est auto-suffisante", "Il ne peut pas se connecter à une base de données", "Il ne supporte pas les requêtes POST ou PUT", "Il fonctionne sans authentification"],
    ans: 0
  },
  {
    id: 22, category: "Architecture",
    q: "Quelle affirmation sur le pattern 'Database per Service' est correcte ?",
    opts: ["Tous les microservices partagent une seule base de données centrale", "Chaque microservice possède et gère sa propre base de données", "Les bases de données sont interdites dans les architectures microservices", "Seul le service principal peut accéder à la base de données"],
    ans: 1
  },
  {
    id: 23, category: "API REST",
    q: "La méthode PATCH diffère de PUT car :",
    opts: ["PATCH supprime la ressource, PUT la remplace", "PATCH met à jour partiellement une ressource, PUT la remplace entièrement", "PATCH est réservé aux APIs privées, PUT aux APIs publiques", "PATCH crée une ressource, PUT la liste"],
    ans: 1
  },
  {
    id: 24, category: "Microservices",
    q: "AMQP (Advanced Message Queuing Protocol) est :",
    opts: ["Un protocole de messagerie fiable pour les systèmes distribués", "Un framework JavaScript pour microservices", "Un algorithme de compression de données", "Un standard de chiffrement réseau"],
    ans: 0
  },
  {
    id: 25, category: "Architecture",
    q: "Quelle est la responsabilité principale d'un Load Balancer ?",
    opts: ["Stocker et répliquer les bases de données", "Distribuer le trafic réseau entre plusieurs instances d'un service", "Gérer l'authentification des utilisateurs", "Compiler et déployer le code source"],
    ans: 1
  },
  {
    id: 26, category: "Architecture",
    q: "Un Service Mesh (ex: Istio) dans les microservices gère :",
    opts: ["La persistance des données entre services", "La communication, sécurité et observabilité inter-services de façon transparente", "Le routage DNS des noms de domaine", "La compression des images Docker"],
    ans: 1
  },
  {
    id: 27, category: "API REST",
    q: "Le code HTTP 429 signifie :",
    opts: ["Ressource expirée", "Trop de requêtes — limite de débit dépassée (Rate Limiting)", "Payload trop large", "Méthode HTTP non supportée"],
    ans: 1
  },
  {
    id: 28, category: "Microservices",
    q: "La 'haute disponibilité' (High Availability) est atteinte grâce à :",
    opts: ["Un seul serveur très puissant sans redondance", "La réplication, le failover automatique et l'élimination des points de défaillance uniques", "L'utilisation exclusive de bases de données SQL", "La compression maximale des échanges réseau"],
    ans: 1
  },
  {
    id: 29, category: "Architecture",
    q: "gRPC, comparé à REST/JSON, offre comme avantage principal :",
    opts: ["Une meilleure compatibilité avec les navigateurs web", "Des performances supérieures grâce à Protocol Buffers et HTTP/2", "Une syntaxe plus simple à apprendre", "Une meilleure intégration avec les bases de données SQL"],
    ans: 1
  },
  {
    id: 30, category: "Microservices",
    q: "Le pattern 'Sidecar' dans Kubernetes/microservices consiste à :",
    opts: ["Déployer un second service dans le même pod pour gérer des fonctions transverses", "Répliquer un service sur plusieurs régions géographiques", "Diviser un microservice en deux services plus petits", "Fusionner deux microservices en un seul pour réduire la latence"],
    ans: 0
  },
  {
    id: 31, category: "API REST",
    q: "Quelle pratique de versioning d'API est la plus courante ?",
    opts: ["Versioning par date (ex: 2024-01-01)", "Versioning dans l'URL (ex: /api/v1/, /api/v2/)", "Versioning par cookie de session", "Versioning par adresse IP du client"],
    ans: 1
  },
  {
    id: 32, category: "Architecture",
    q: "La 'résilience' dans les systèmes distribués signifie :",
    opts: ["La capacité à traiter un maximum de requêtes par seconde", "La capacité à maintenir le fonctionnement malgré des défaillances partielles", "La vitesse de démarrage d'un nouveau service", "La taille minimale du code source"],
    ans: 1
  },
  {
    id: 33, category: "Microservices",
    q: "Quel outil est couramment utilisé comme Service Registry pour la découverte de services ?",
    opts: ["MySQL", "Consul / Eureka", "Nginx", "Webpack"],
    ans: 1
  },

  // ── INTELLIGENCE ARTIFICIELLE & ML (34-67) ──
  {
    id: 34, category: "Machine Learning",
    q: "Le Machine Learning supervisé se distingue du non-supervisé par :",
    opts: ["L'utilisation de GPU plus puissants", "L'entraînement sur des données labellisées (entrées + sorties connues)", "L'absence totale de données d'entraînement", "L'utilisation obligatoire de réseaux de neurones profonds"],
    ans: 1
  },
  {
    id: 35, category: "Machine Learning",
    q: "L'overfitting (surapprentissage) se manifeste quand :",
    opts: ["Le modèle est trop simple pour capturer les patterns", "Le modèle performe excellemment en entraînement mais mal sur de nouvelles données", "Le modèle converge trop rapidement", "Les données d'entraînement sont trop volumineuses"],
    ans: 1
  },
  {
    id: 36, category: "Deep Learning",
    q: "Un réseau de neurones convolutif (CNN) est optimisé pour :",
    opts: ["La traduction automatique de textes", "La classification et détection d'images", "La prédiction de séries temporelles financières uniquement", "La génération de texte et les LLMs"],
    ans: 1
  },
  {
    id: 37, category: "Machine Learning",
    q: "Qu'est-ce que la fonction de perte (loss function) ?",
    opts: ["La vitesse d'exécution du modèle", "Une mesure quantifiant l'écart entre la prédiction du modèle et la réalité", "Le nombre de paramètres du réseau de neurones", "La taille du jeu de données d'entraînement"],
    ans: 1
  },
  {
    id: 38, category: "Machine Learning",
    q: "K-means est un algorithme d'apprentissage :",
    opts: ["Supervisé utilisé pour la classification", "Non supervisé utilisé pour le clustering", "Par renforcement pour les agents intelligents", "Semi-supervisé pour la détection d'anomalies"],
    ans: 1
  },
  {
    id: 39, category: "Machine Learning",
    q: "La Random Forest (Forêt Aléatoire) est :",
    opts: ["Un seul arbre de décision très profond", "Un ensemble de plusieurs arbres de décision combinant leurs prédictions", "Un réseau de neurones spécialisé dans les données tabulaires", "Un algorithme de clustering hierarchique"],
    ans: 1
  },
  {
    id: 40, category: "Deep Learning",
    q: "ReLU (Rectified Linear Unit) est une fonction d'activation qui :",
    opts: ["Retourne des valeurs entre 0 et 1 (idéale pour les probabilités)", "Retourne max(0, x), éliminant les valeurs négatives", "Retourne des valeurs entre -1 et 1 (centrées)", "Retourne la valeur inchangée dans tous les cas"],
    ans: 1
  },
  {
    id: 41, category: "Machine Learning",
    q: "L'hyperparamètre 'learning rate' (taux d'apprentissage) contrôle :",
    opts: ["Le nombre de neurones dans chaque couche cachée", "La vitesse à laquelle le modèle ajuste ses poids lors de l'entraînement", "La quantité de données utilisées par epoch", "Le nombre maximum d'epochs autorisées"],
    ans: 1
  },
  {
    id: 42, category: "Machine Learning",
    q: "La validation croisée (cross-validation) permet de :",
    opts: ["Valider la syntaxe du code Python du modèle", "Évaluer la performance du modèle de façon robuste en partitionnant les données", "Comparer deux algorithmes de ML différents directement", "Réduire le temps d'entraînement en parallélisant les calculs"],
    ans: 1
  },
  {
    id: 43, category: "IA",
    q: "NLP (Natural Language Processing) est la branche de l'IA qui traite :",
    opts: ["Le traitement et la compréhension du langage humain par les machines", "L'analyse de réseaux physiques et protocoles", "La navigation autonome des robots", "Le traitement des images médicales"],
    ans: 0
  },
  {
    id: 44, category: "Deep Learning",
    q: "Le Transfer Learning consiste à :",
    opts: ["Transférer des données entre deux serveurs distants", "Réutiliser un modèle pré-entraîné sur une grande tâche pour une nouvelle tâche spécifique", "Copier les poids d'un modèle vers un autre de taille différente", "Entraîner un modèle à partir de zéro avec de nouvelles données"],
    ans: 1
  },
  {
    id: 45, category: "Machine Learning",
    q: "Qu'est-ce que le 'batch size' lors de l'entraînement d'un réseau de neurones ?",
    opts: ["Le nombre total d'exemples dans le dataset", "Le nombre d'exemples traités avant chaque mise à jour des poids", "La taille de la couche de sortie du réseau", "Le nombre de paramètres du modèle"],
    ans: 1
  },
  {
    id: 46, category: "Machine Learning",
    q: "La précision (Accuracy) comme métrique d'évaluation est inadaptée quand :",
    opts: ["Le dataset comporte plus de 1000 exemples", "Les classes sont très déséquilibrées (ex: 95% négatifs, 5% positifs)", "Le modèle est un réseau de neurones profond", "L'entraînement dépasse 100 epochs"],
    ans: 1
  },
  {
    id: 47, category: "IA",
    q: "Un LLM (Large Language Model) est principalement :",
    opts: ["Un modèle de computer vision pour la détection d'objets", "Un modèle de traitement du langage entraîné sur de très larges corpus textuels", "Un algorithme de clustering pour les données non structurées", "Un système de recommandation basé sur le filtrage collaboratif"],
    ans: 1
  },
  {
    id: 48, category: "Machine Learning",
    q: "La régularisation (L1/L2) dans le ML sert à :",
    opts: ["Accélérer la convergence du modèle", "Prévenir l'overfitting en pénalisant les poids trop élevés", "Augmenter la taille du réseau de neurones", "Normaliser les données d'entrée"],
    ans: 1
  },
  {
    id: 49, category: "Machine Learning",
    q: "La matrice de confusion permet de visualiser :",
    opts: ["La complexité du réseau de neurones", "Les vrais/faux positifs et négatifs d'un classifieur", "La corrélation entre les features du dataset", "La distribution des données par classe"],
    ans: 1
  },
  {
    id: 50, category: "IA",
    q: "Le problème du 'cold start' dans les systèmes de recommandation désigne :",
    opts: ["Un serveur de ML qui met trop de temps à démarrer", "La difficulté à recommander pour de nouveaux utilisateurs sans historique", "Un modèle trop lourd pour les appareils mobiles", "Un bug lors de la première epoch d'entraînement"],
    ans: 1
  },
  {
    id: 51, category: "Deep Learning",
    q: "Un RNN (Recurrent Neural Network) est spécialement adapté pour :",
    opts: ["La classification d'images haute résolution", "Les données séquentielles comme les textes et les séries temporelles", "Le clustering de données tabulaires", "La détection d'objets en temps réel"],
    ans: 1
  },
  {
    id: 52, category: "Machine Learning",
    q: "La normalisation des données (standardisation) permet de :",
    opts: ["Supprimer les outliers du dataset automatiquement", "Mettre toutes les features à une échelle comparable pour améliorer la convergence", "Augmenter artificiellement la taille du dataset", "Réduire le nombre de paramètres du modèle"],
    ans: 1
  },
  {
    id: 53, category: "IA",
    q: "L'apprentissage par renforcement (Reinforcement Learning) fonctionne par :",
    opts: ["Entraînement sur des données labellisées fournies par des experts humains", "Essais, erreurs et récompenses dans un environnement dynamique", "Copie des poids d'un modèle existant vers un nouveau", "Apprentissage sans données avec des règles définies manuellement"],
    ans: 1
  },
  {
    id: 54, category: "Machine Learning",
    q: "Scikit-learn est principalement utilisé pour :",
    opts: ["Le Deep Learning avec des réseaux de neurones profonds", "Le Machine Learning classique (classification, régression, clustering)", "Le traitement d'images avec des CNN", "Le déploiement de modèles en production sur Kubernetes"],
    ans: 1
  },
  {
    id: 55, category: "Machine Learning",
    q: "La technique de 'Data Augmentation' consiste à :",
    opts: ["Acheter plus de données sur des marketplaces spécialisés", "Créer artificiellement de nouvelles données d'entraînement par transformations", "Supprimer les données redondantes du dataset", "Fusionner plusieurs datasets de sources différentes"],
    ans: 1
  },
  {
    id: 56, category: "Deep Learning",
    q: "Le mécanisme d'Attention (Transformer architecture) permet au modèle de :",
    opts: ["S'entraîner plus rapidement en ignorant les données peu importantes", "Se concentrer sélectivement sur les parties pertinentes de l'entrée", "Réduire la taille des embeddings pour économiser la mémoire", "Paralléliser l'entraînement sur plusieurs GPUs"],
    ans: 1
  },
  {
    id: 57, category: "Machine Learning",
    q: "Le F1-Score est particulièrement utile quand :",
    opts: ["On veut maximiser uniquement la vitesse d'inférence", "On doit équilibrer précision et rappel, notamment sur des classes déséquilibrées", "Les données sont parfaitement balancées entre les classes", "On évalue un modèle de régression continue"],
    ans: 1
  },
  {
    id: 58, category: "IA",
    q: "Un Feature Engineering efficace en ML consiste à :",
    opts: ["Automatiser entièrement l'entraînement sans intervention humaine", "Créer, sélectionner et transformer les variables d'entrée pour améliorer le modèle", "Augmenter le nombre de couches du réseau de neurones", "Remplacer les données manquantes par des zéros systématiquement"],
    ans: 1
  },
  {
    id: 59, category: "Machine Learning",
    q: "La régression logistique (malgré son nom) est utilisée pour :",
    opts: ["Prédire des valeurs continues comme un prix immobilier", "Classifier des données en catégories discrètes", "Réduire la dimensionnalité des datasets", "Regrouper des données non labellisées par similarité"],
    ans: 1
  },
  {
    id: 60, category: "IA",
    q: "L'IA explicable (XAI - Explainable AI) vise à :",
    opts: ["Rendre les modèles plus rapides à l'entraînement", "Rendre les décisions des modèles d'IA interprétables et compréhensibles", "Réduire la consommation énergétique des GPU", "Automatiser le déploiement des modèles en production"],
    ans: 1
  },
  {
    id: 61, category: "Machine Learning",
    q: "Un pipeline ML typique comprend dans l'ordre :",
    opts: ["Déploiement → Collecte → Entraînement → Évaluation", "Collecte → Prétraitement → Entraînement → Évaluation → Déploiement", "Entraînement → Collecte → Évaluation → Prétraitement", "Évaluation → Entraînement → Collecte → Déploiement"],
    ans: 1
  },
  {
    id: 62, category: "Deep Learning",
    q: "Le 'vanishing gradient' est un problème qui survient quand :",
    opts: ["Le modèle converge trop rapidement et saute le minimum global", "Les gradients deviennent trop petits dans les premières couches des réseaux profonds, bloquant l'apprentissage", "La taille des batches est trop grande pour la mémoire GPU", "Le learning rate est trop élevé causant des oscillations"],
    ans: 1
  },
  {
    id: 63, category: "Machine Learning",
    q: "PCA (Principal Component Analysis) est principalement utilisée pour :",
    opts: ["La classification supervisée de données tabulaires", "La réduction de dimensionnalité tout en conservant un maximum de variance", "L'augmentation artificielle de la taille du dataset", "L'évaluation de la performance d'un classifieur"],
    ans: 1
  },
  {
    id: 64, category: "IA",
    q: "Dans le contexte de l'IA pour les hackathons, une API d'inférence permet de :",
    opts: ["Entraîner un nouveau modèle à partir de zéro via HTTP", "Consommer un modèle pré-entraîné pour obtenir des prédictions sans gérer l'infrastructure ML", "Monitorer les performances d'un modèle en production", "Stocker les datasets d'entraînement sur un serveur distant"],
    ans: 1
  },
  {
    id: 65, category: "Machine Learning",
    q: "L'underfitting (sous-apprentissage) se produit quand :",
    opts: ["Le modèle memorise les données d'entraînement sans généraliser", "Le modèle est trop simple pour capturer les patterns complexes des données", "Le dataset est trop volumineux pour être traité", "Le learning rate est trop faible et l'entraînement prend trop de temps"],
    ans: 1
  },
  {
    id: 66, category: "Deep Learning",
    q: "Le Dropout dans un réseau de neurones consiste à :",
    opts: ["Supprimer les neurones avec les poids les plus faibles après entraînement", "Désactiver aléatoirement des neurones pendant l'entraînement pour prévenir l'overfitting", "Réduire le nombre de couches du réseau lors de l'inférence", "Ignorer les mini-batches avec des données aberrantes"],
    ans: 1
  },
  {
    id: 67, category: "IA",
    q: "Un embeddings (vecteur d'embeddings) en NLP représente :",
    opts: ["Un algorithme de compression de texte", "Une représentation numérique dense d'un mot/token capturant son sens sémantique", "Un format de stockage des modèles de langage", "Une méthode de tokenisation des phrases"],
    ans: 1
  },

  // ── RÉSEAUX, IoT & PROTOCOLES (68-100) ──
  {
    id: 68, category: "IoT",
    q: "MQTT se distingue de HTTP pour l'IoT car :",
    opts: ["Il est plus sécurisé grâce au chiffrement obligatoire", "Il est ultra-léger avec un overhead minimal, idéal pour appareils contraints en bande passante", "Il supporte nativement les bases de données SQL", "Il garantit des débits supérieurs à 1 Gbps"],
    ans: 1
  },
  {
    id: 69, category: "Réseaux",
    q: "Quelle couche du modèle OSI est responsable du routage des paquets ?",
    opts: ["Couche 2 — Liaison de données", "Couche 3 — Réseau (Network Layer)", "Couche 4 — Transport", "Couche 7 — Application"],
    ans: 1
  },
  {
    id: 70, category: "IoT",
    q: "Dans le protocole MQTT, un 'Broker' est :",
    opts: ["Un dispositif IoT qui collecte des données", "Le serveur intermédiaire qui reçoit et redistribue les messages entre publishers et subscribers", "Un client qui publie des données sur un topic", "Un gateway qui convertit MQTT en HTTP"],
    ans: 1
  },
  {
    id: 71, category: "Réseaux",
    q: "La différence fondamentale entre TCP et UDP est :",
    opts: ["TCP est plus rapide mais moins fiable qu'UDP", "TCP garantit la livraison avec accusé de réception, UDP est rapide sans garantie d'ordre ni de livraison", "UDP chiffre les données, TCP non", "TCP est réservé aux applications web, UDP aux jeux vidéo uniquement"],
    ans: 1
  },
  {
    id: 72, category: "IoT",
    q: "LoRaWAN est classifié comme :",
    opts: ["Un protocole WiFi longue portée haut débit", "Un protocole LPWAN (Low Power Wide Area Network) pour IoT à longue portée", "Un protocole Bluetooth étendu pour les villes intelligentes", "Un standard Ethernet industriel pour usines connectées"],
    ans: 1
  },
  {
    id: 73, category: "IoT",
    q: "Qu'est-ce qu'un Edge Device dans une architecture IoT ?",
    opts: ["Un serveur cloud central traitant toutes les données", "Un appareil situé à la périphérie du réseau qui pré-traite les données localement", "Un routeur WiFi de nouvelle génération", "Une base de données distribuée géographiquement"],
    ans: 1
  },
  {
    id: 74, category: "IoT",
    q: "Le protocole CoAP (Constrained Application Protocol) est conçu pour :",
    opts: ["Les applications web à haute performance nécessitant HTTP/2", "Les appareils IoT contraints avec peu de ressources, similaire à HTTP mais ultra-léger", "Les communications sécurisées entre banques et institutions financières", "Le streaming vidéo sur réseaux 5G"],
    ans: 1
  },
  {
    id: 75, category: "Réseaux",
    q: "NFC (Near Field Communication) opère à une portée de :",
    opts: ["Jusqu'à 10 mètres comme le Bluetooth classique", "Quelques centimètres (< 20 cm) pour les échanges sans contact", "Jusqu'à 100 mètres en environnement ouvert", "Plusieurs kilomètres via les antennes relais"],
    ans: 1
  },
  {
    id: 76, category: "IoT",
    q: "Zigbee est un protocole réseau principalement utilisé pour :",
    opts: ["Les communications longue portée dans les zones rurales", "Les réseaux domotiques basse consommation (maison intelligente, capteurs)", "Le streaming audio haute qualité sans fil", "Les réseaux d'entreprise haute performance"],
    ans: 1
  },
  {
    id: 77, category: "Réseaux",
    q: "Le DNS (Domain Name System) a pour rôle de :",
    opts: ["Chiffrer les communications entre client et serveur", "Traduire les noms de domaine lisibles en adresses IP numériques", "Gérer l'attribution dynamique des adresses IP sur un réseau", "Filtrer les paquets selon des règles de sécurité"],
    ans: 1
  },
  {
    id: 78, category: "Réseaux",
    q: "Une attaque DDoS (Distributed Denial of Service) consiste à :",
    opts: ["Intercepter les communications chiffrées d'un réseau", "Saturer une cible avec un volume massif de trafic depuis de nombreuses sources", "Introduire un code malveillant dans une application web", "Usurper l'identité d'un utilisateur pour accéder à ses données"],
    ans: 1
  },
  {
    id: 79, category: "IoT",
    q: "BLE (Bluetooth Low Energy) est préféré au Bluetooth classique pour l'IoT car :",
    opts: ["Il offre des débits de transfert supérieurs pour les gros fichiers", "Il consomme nettement moins d'énergie, prolongeant la durée de vie des batteries", "Il couvre des distances jusqu'à 1 kilomètre", "Il est totalement rétrocompatible avec tous les appareils Bluetooth 1.0"],
    ans: 1
  },
  {
    id: 80, category: "IoT",
    q: "Un gateway IoT a pour rôle principal de :",
    opts: ["Alimenter en énergie les capteurs IoT sur le terrain", "Connecter les objets IoT (protocoles hétérogènes) au cloud ou à internet", "Stocker définitivement toutes les données des capteurs", "Programmer à distance les firmware des capteurs"],
    ans: 1
  },
  {
    id: 81, category: "Réseaux",
    q: "Le NAT (Network Address Translation) permet de :",
    opts: ["Chiffrer les échanges réseau de bout en bout", "Translater des adresses IP privées en adresses publiques pour accéder à internet", "Attribuer dynamiquement des adresses IP via DHCP", "Filtrer les paquets entrants selon leur port destination"],
    ans: 1
  },
  {
    id: 82, category: "IoT",
    q: "QoS (Quality of Service) dans les réseaux IoT permet de :",
    opts: ["Mesurer la qualité des capteurs physiques déployés", "Prioriser certains flux réseau pour garantir latence et bande passante critiques", "Sécuriser les communications MQTT par chiffrement TLS", "Optimiser la consommation énergétique des appareils connectés"],
    ans: 1
  },
  {
    id: 83, category: "Réseaux",
    q: "IPv6 a été introduit principalement pour :",
    opts: ["Améliorer la sécurité des communications internet", "Résoudre l'épuisement des adresses IPv4 en multipliant massivement l'espace d'adressage", "Accélérer le routage des paquets sur les liens haute vitesse", "Remplacer TCP par un protocole plus efficace"],
    ans: 1
  },
  {
    id: 84, category: "IoT",
    q: "Un système Smart City intègre typiquement :",
    opts: ["Exclusivement des caméras de surveillance sans traitement de données", "Des capteurs IoT, connectivité, analyse de données et automatisation pour optimiser services urbains", "Un réseau WiFi municipal sans infrastructure cloud", "Des ordinateurs centraux gérant manuellement l'infrastructure"],
    ans: 1
  },
  {
    id: 85, category: "Réseaux",
    q: "TLS/SSL dans HTTPS sert à :",
    opts: ["Compresser les données pour accélérer le chargement des pages", "Authentifier le serveur et chiffrer les échanges entre client et serveur", "Mettre en cache les ressources statiques côté client", "Équilibrer la charge entre plusieurs serveurs web"],
    ans: 1
  },
  {
    id: 86, category: "IoT",
    q: "Le concept de 'Digital Twin' (jumeau numérique) en IoT est :",
    opts: ["Une copie de sauvegarde des données IoT dans le cloud", "Une réplique numérique virtuelle d'un objet physique, mise à jour en temps réel", "Un protocole de communication entre deux appareils IoT identiques", "Un algorithme de synchronisation des capteurs distribués"],
    ans: 1
  },
  {
    id: 87, category: "Réseaux",
    q: "Un VPN (Virtual Private Network) crée :",
    opts: ["Un réseau WiFi virtuel dans un datacenter", "Un tunnel chiffré sur un réseau public pour sécuriser les communications", "Un réseau local virtuel isolant les serveurs entre eux (VLAN)", "Une connexion directe physique entre deux datacenters"],
    ans: 1
  },
  {
    id: 88, category: "IoT",
    q: "Sigfox se distingue de LoRa par :",
    opts: ["Une portée inférieure mais un débit bien supérieur", "Un réseau propriétaire géré par un opérateur centralisé, contrairement à LoRa qui est ouvert", "Une consommation énergétique plus élevée", "Une utilisation exclusive dans les environnements industriels"],
    ans: 1
  },
  {
    id: 89, category: "Réseaux",
    q: "Le protocole WebSocket se différencie de HTTP car il :",
    opts: ["Utilise le protocole UDP pour les communications en temps réel", "Établit une connexion persistante bidirectionnelle full-duplex entre client et serveur", "Chiffre obligatoirement tous les échanges via AES-256", "Fonctionne exclusivement avec les bases de données NoSQL"],
    ans: 1
  },
  {
    id: 90, category: "IoT",
    q: "L'Edge Computing dans l'IoT réduit principalement :",
    opts: ["Le coût des capteurs physiques déployés sur le terrain", "La latence et la bande passante consommée en traitant les données localement", "Le nombre d'appareils connectés nécessaires", "La complexité du code embarqué sur les microcontrôleurs"],
    ans: 1
  },
  {
    id: 91, category: "Réseaux",
    q: "DHCP (Dynamic Host Configuration Protocol) attribue automatiquement :",
    opts: ["Des certificats SSL aux serveurs web", "Des adresses IP dynamiques aux appareils rejoignant un réseau", "Des noms de domaine aux serveurs via DNS", "Des règles de pare-feu aux équipements réseau"],
    ans: 1
  },
  {
    id: 92, category: "IoT",
    q: "Dans une architecture IoT industrielle (IIoT), l'OPC-UA est :",
    opts: ["Un protocole de communication standardisé pour l'interopérabilité des équipements industriels", "Un système d'exploitation temps réel pour microcontrôleurs", "Un framework de visualisation des données de capteurs", "Un protocole de chiffrement des communications machines"],
    ans: 0
  },
  {
    id: 93, category: "Réseaux",
    q: "Le protocole AMQP (Advanced Message Queuing Protocol) offre par rapport à MQTT :",
    opts: ["Une consommation énergétique réduite pour l'IoT", "Des fonctionnalités plus riches de routage, transaction et persistance des messages", "Une portée réseau supérieure pour les LPWAN", "Un débit plus élevé pour les réseaux haut débit"],
    ans: 1
  },
  {
    id: 94, category: "IoT",
    q: "Un microcontrôleur ESP32 est couramment utilisé en IoT pour :",
    opts: ["Héberger des bases de données volumineuses", "Intégrer WiFi et Bluetooth dans des projets IoT à faible coût", "Déployer des modèles de Deep Learning complexes", "Gérer des réseaux 5G locaux"],
    ans: 1
  },
  {
    id: 95, category: "Réseaux",
    q: "Le concept de 'Software Defined Networking' (SDN) sépare :",
    opts: ["Les données chiffrées des données en clair dans un réseau", "Le plan de contrôle (décision de routage) du plan de données (transmission des paquets)", "Le réseau physique du réseau virtuel dans le cloud", "L'infrastructure réseau de l'infrastructure serveur"],
    ans: 1
  },
  {
    id: 96, category: "IoT",
    q: "La 5G représente un avantage majeur pour l'IoT grâce à :",
    opts: ["Son coût d'infrastructure réduit par rapport à la 4G", "Sa très faible latence, haute densité de connexions et débit élevé", "Sa portée supérieure aux réseaux LPWAN", "Sa consommation énergétique nulle pour les capteurs IoT"],
    ans: 1
  },
  {
    id: 97, category: "Réseaux",
    q: "Un pare-feu (firewall) de type 'stateful' inspecte :",
    opts: ["Uniquement les en-têtes des paquets individuellement", "L'état des connexions réseau pour autoriser ou bloquer le trafic contextuel", "Le contenu des emails entrants pour détecter les spams", "Uniquement les adresses IP sources et destinations"],
    ans: 1
  },
  {
    id: 98, category: "IoT",
    q: "Le protocole Modbus, encore très utilisé dans l'industrie, est caractérisé par :",
    opts: ["Sa sécurité intégrée et son chiffrement natif", "Sa simplicité, robustesse et large compatibilité avec les équipements industriels legacy", "Ses hautes performances pour les réseaux IoT modernes", "Son support natif des protocoles TCP/IP sans adaptation"],
    ans: 1
  },
  {
    id: 99, category: "Réseaux",
    q: "BGP (Border Gateway Protocol) est le protocole qui gère :",
    opts: ["Le routage interne au sein d'un réseau d'entreprise (LAN)", "Le routage inter-domaines sur internet entre Autonomous Systems", "L'attribution des adresses IP par les FAI", "La résolution des noms de domaine sur internet"],
    ans: 1
  },
  {
    id: 100, category: "IoT",
    q: "Dans un projet de Smart Agriculture IoT, quel capteur est le plus pertinent pour optimiser l'irrigation ?",
    opts: ["Un capteur de luminosité (lux) pour l'ensoleillement", "Un capteur d'humidité du sol couplé à un système de déclenchement automatique", "Un capteur de CO2 atmosphérique", "Un capteur de pression barométrique"],
    ans: 1
  }
];

// ═══════════════════════════════════════════════════════════
//  TECHNOVORE N2 — ENGINE
// ═══════════════════════════════════════════════════════════

const MODE_CATS = {
  mix:           null,
  microservices: ['Microservices', 'API REST', 'Architecture'],
  ia:            ['Machine Learning', 'Deep Learning', 'IA'],
  iot:           ['IoT', 'Réseaux'],
  smart:         ['IoT']
};

const MODE_LABELS = {
  mix:           'Mix complet',
  microservices: 'Microservices & Architecture',
  ia:            'IA & Machine Learning',
  iot:           'Réseaux & IoT',
  smart:         'Smart Systems'
};

// Nombre de questions par session par défaut
const TOTAL_QUESTIONS = 60;

const CAT_COLORS = {
  'Microservices':'#C62828','API REST':'#C62828','Architecture':'#C62828',
  'Machine Learning':'#FF7043','Deep Learning':'#FF7043','IA':'#FF7043',
  'IoT':'#00BFA5','Réseaux':'#00BFA5'
};

const HISTORY_KEY = 'technovore_n2_history';
const MAX_HISTORY = 25;

// ── State ──────────────────────────────────────────────────
const S = {
  mode:      'mix',
  questions: [],
  idx:       0,
  selected:  null,
  answers:   [],
  timer:     null,
  timeLeft:  15,
  TOTAL:     TOTAL_QUESTIONS,
  DUR:       15,
  t0:        null,
  stats:     { correct:0, wrong:0, skipped:0, time:0, bycat:{} }
};

// ── Utils ──────────────────────────────────────────────────
function shuffle(a) {
  const r = [...a];
  for (let i = r.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [r[i],r[j]] = [r[j],r[i]];
  }
  return r;
}

function shuffleOpts(q) {
  const ix = shuffle([0,1,2,3].filter(i => i < q.opts.length));
  return { ...q, opts: ix.map(i=>q.opts[i]), ans: ix.indexOf(q.ans) };
}

function pickQuestions() {
  const cats = MODE_CATS[S.mode];
  let pool = cats
    ? QUESTION_BANK.filter(q => cats.includes(q.category))
    : [...QUESTION_BANK];

  // For mix mode (no cats) we want exactly TOTAL_QUESTIONS — pad if needed.
  if (!cats && pool.length < TOTAL_QUESTIONS) {
    const ids = new Set(pool.map(q=>q.id));
    const extra = shuffle(QUESTION_BANK.filter(q=>!ids.has(q.id)));
    pool = [...pool, ...extra];
  }

  // Slice to the default target (TOTAL_QUESTIONS). For themed modes (cats present)
  // this will naturally return fewer questions if the pool is smaller — we **do not**
  // pad themed sessions with questions from other categories.
  return shuffle(pool).slice(0, TOTAL_QUESTIONS).map(shuffleOpts);
}

function ft(s) {
  return `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`;
}

function fd(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString('fr-FR',{day:'2-digit',month:'short',year:'numeric'})
    + ' · ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
}

function catColor(cat) { return CAT_COLORS[cat] || '#C62828'; }

// ── Screen navigation ──────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.scrollTop = 0;
}

// ── History ────────────────────────────────────────────────
function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; }
  catch { return []; }
}

function pushHistory(entry) {
  const h = getHistory();
  h.unshift(entry);
  if (h.length > MAX_HISTORY) h.length = MAX_HISTORY;
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); } catch {}
}

function renderHistory() {
  const sec  = document.getElementById('history-section');
  const list = document.getElementById('history-list');
  const h    = getHistory();

  if (!h.length) { sec.classList.add('hidden'); return; }
  sec.classList.remove('hidden');
  list.innerHTML = '';

  h.forEach(s => {
    const pct   = Math.round((s.correct / s.total)*100);
    const color = pct>=80?'#00BFA5': pct>=60?'#C62828': pct>=40?'#F59E0B':'#55556A';
    const el    = document.createElement('div');
    el.className = 'history-item';
    el.innerHTML = `
      <div class="history-top">
        <span class="history-mode">${s.modeLabel}</span>
        <span class="history-date">${fd(s.date)}</span>
      </div>
      <div class="history-scores">
        <span class="history-score" style="color:${color}">${s.correct}/${s.total}</span>
        <span class="history-pct"  style="color:${color}">${pct}%</span>
        <span class="history-dur">${ft(s.duration)}</span>
      </div>
      <div class="history-bar-track">
        <div class="history-bar" style="width:0%;background:${color}" data-w="${pct}"></div>
      </div>`;
    list.appendChild(el);
  });

  // Animate bars after paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.history-bar').forEach(b => {
      b.style.width = b.dataset.w + '%';
    });
  });
}

// ── Start quiz ─────────────────────────────────────────────
function startQuiz(mode) {
  if (mode) S.mode = mode;
  clearInterval(S.timer);

  S.questions = pickQuestions();
  // Ajuste la taille de la session au nombre réel de questions sélectionnées
  S.TOTAL = S.questions.length;
  S.idx       = 0;
  S.selected  = null;
  S.answers   = [];
  S.t0        = Date.now();
  S.stats     = { correct:0, wrong:0, skipped:0, time:0, bycat:{} };

  const ml = document.getElementById('quiz-mode-label');
  if (ml) ml.textContent = MODE_LABELS[S.mode];

  showScreen('screen-quiz');
  renderQ();
}

// ── Render question ────────────────────────────────────────
function renderQ() {
  const q = S.questions[S.idx];
  S.selected = null;
  S.timeLeft = S.DUR;

  // Progress & counter
  document.getElementById('progress-bar').style.width =
    ((S.idx / S.TOTAL)*100) + '%';
  document.getElementById('question-counter').textContent =
    `${S.idx+1} / ${S.TOTAL}`;

  // Category badge
  const badge = document.getElementById('category-badge');
  badge.textContent      = q.category;
  badge.style.color      = catColor(q.category);
  badge.style.borderColor = catColor(q.category);

  // Question text
  document.getElementById('question-text').textContent = q.q;

  // Options
  const cont = document.getElementById('options-container');
  cont.innerHTML = '';
  ['A','B','C','D'].forEach((L, i) => {
    if (i >= q.opts.length) return;
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${L}</span><span class="opt-text">${q.opts[i]}</span>`;
    btn.addEventListener('click', () => pick(i));
    cont.appendChild(btn);
  });

  // Slide-in animation
  const card = document.getElementById('question-card');
  card.classList.remove('anim');
  void card.offsetWidth;
  card.classList.add('anim');

  startTimer();
}

// ── Pick answer ────────────────────────────────────────────
function pick(i) {
  if (S.selected !== null) return;
  S.selected = i;
  document.querySelectorAll('.opt-btn').forEach((b, j) => {
    b.disabled = true;
    if (j === i) b.classList.add('selected');
  });
  setTimeout(() => record(false), 220);
}

// ── Timer ──────────────────────────────────────────────────
function startTimer() {
  clearInterval(S.timer);
  updateTimer();
  S.timer = setInterval(() => {
    S.timeLeft--;
    updateTimer();
    if (S.timeLeft <= 0) { clearInterval(S.timer); record(true); }
  }, 1000);
}

function updateTimer() {
  const bar   = document.getElementById('timer-bar');
  const label = document.getElementById('timer-label');
  const pct   = (S.timeLeft / S.DUR)*100;
  bar.style.width = pct + '%';
  label.textContent = S.timeLeft + 's';
  if (S.timeLeft > 8)      { bar.style.background='var(--accent)'; bar.classList.remove('pulse'); }
  else if (S.timeLeft > 4) { bar.style.background='#F59E0B';       bar.classList.remove('pulse'); }
  else                     { bar.style.background='#FF3333';        bar.classList.add('pulse'); }
}

// ── Record answer ──────────────────────────────────────────
function record(expired) {
  clearInterval(S.timer);
  const q = S.questions[S.idx];
  const ok = S.selected !== null && S.selected === q.ans;
  const t  = S.DUR - S.timeLeft;

  S.answers.push({
    qid: q.id, q: q.q, cat: q.category,
    sel: S.selected, ans: q.ans,
    ok, expired: expired && S.selected===null, t
  });

  if (ok)                    S.stats.correct++;
  else if (S.selected===null) S.stats.skipped++;
  else                       S.stats.wrong++;

  S.stats.time += t;
  if (!S.stats.bycat[q.category]) S.stats.bycat[q.category] = {ok:0,n:0};
  S.stats.bycat[q.category].n++;
  if (ok) S.stats.bycat[q.category].ok++;

  if (expired && S.selected===null) advance();
  else setTimeout(advance, 220);
}

function advance() {
  S.idx++;
  if (S.idx >= S.TOTAL) showResults();
  else renderQ();
}

// ── Results ────────────────────────────────────────────────
function showResults() {
  clearInterval(S.timer);
  showScreen('screen-results');

  const elapsed = Math.round((Date.now() - S.t0)/1000);
  const score   = S.stats.correct;
  const pct     = Math.round((score/S.TOTAL)*100);

  // Save to history
  pushHistory({
    date: Date.now(),
    mode: S.mode,
    modeLabel: MODE_LABELS[S.mode],
    correct: score,
    wrong: S.stats.wrong,
    skipped: S.stats.skipped,
    total: S.TOTAL,
    duration: elapsed,
    bycat: S.stats.bycat
  });

  // Mode label
  const rl = document.getElementById('results-mode-label');
  if (rl) rl.textContent = MODE_LABELS[S.mode];

  // Numbers
  document.getElementById('score-total').textContent = `/${S.TOTAL}`;
  anim('score-number', 0, score, 1200);
  anim('score-percent', 0, pct, 1200);

  // Verdict
  const vv = document.getElementById('verdict-text');
  const vs = document.getElementById('verdict-sub');
  if (pct>=80)      { vv.textContent='Excellent';   vs.textContent='Tu es prêt pour la présélection.'; vv.style.color='#00BFA5'; }
  else if (pct>=60) { vv.textContent='Bon niveau';  vs.textContent='Continue — affine les thèmes faibles.'; vv.style.color='#C62828'; }
  else if (pct>=40) { vv.textContent='À renforcer'; vs.textContent="Intensifie l'entraînement ciblé."; vv.style.color='#F59E0B'; }
  else              { vv.textContent='Insuffisant'; vs.textContent='Revois les fondamentaux et recommence.'; vv.style.color='#55556A'; }

  document.getElementById('stat-correct').textContent  = score;
  document.getElementById('stat-wrong').textContent    = S.stats.wrong;
  document.getElementById('stat-skipped').textContent  = S.stats.skipped;
  document.getElementById('stat-time').textContent     = ft(elapsed);
  document.getElementById('stat-avg-time').textContent = Math.round(S.stats.time/S.TOTAL)+'s';

  requestAnimationFrame(() => drawGauge(pct));
  renderCats();
  renderTable();
}

function anim(id, from, to, dur) {
  const el = document.getElementById(id);
  const t0 = performance.now();
  const tick = now => {
    const p = Math.min((now-t0)/dur, 1);
    el.textContent = Math.round(from+(to-from)*(1-Math.pow(1-p,3)));
    if (p<1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function drawGauge(pct) {
  const cv = document.getElementById('score-gauge');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const cx=cv.width/2, cy=cv.height/2, r=cx-14;
  ctx.clearRect(0,0,cv.width,cv.height);

  ctx.beginPath(); ctx.arc(cx,cy,r,Math.PI,2*Math.PI);
  ctx.strokeStyle='#1C1C27'; ctx.lineWidth=12; ctx.lineCap='round'; ctx.stroke();

  const col = pct>=80?'#00BFA5': pct>=60?'#C62828': pct>=40?'#F59E0B':'#444';
  ctx.beginPath(); ctx.arc(cx,cy,r,Math.PI,Math.PI+(pct/100)*Math.PI);
  ctx.strokeStyle=col; ctx.lineWidth=12; ctx.lineCap='round'; ctx.stroke();
}

function renderCats() {
  const c = document.getElementById('category-breakdown');
  c.innerHTML = '';
  Object.entries(S.stats.bycat).forEach(([cat,d]) => {
    const pct = Math.round((d.ok/d.n)*100);
    const col = catColor(cat);
    const el  = document.createElement('div');
    el.className = 'cat-item';
    el.innerHTML = `
      <div class="cat-header">
        <span class="cat-name">${cat}</span>
        <span class="cat-score">${d.ok}/${d.n} — ${pct}%</span>
      </div>
      <div class="cat-bar-track">
        <div class="cat-bar-fill" style="background:${col}" data-w="${pct}"></div>
      </div>`;
    c.appendChild(el);
  });
  setTimeout(() => document.querySelectorAll('.cat-bar-fill').forEach(b => {
    b.style.width = b.dataset.w + '%';
  }), 80);
}

function renderTable() {
  const tb = document.getElementById('review-tbody');
  tb.innerHTML = '';
  S.answers.forEach((a,i) => {
    const tr  = document.createElement('tr');
    const cls = a.ok?'st-ok': a.expired?'st-skip':'st-err';
    const lbl = a.ok?'Correct': a.expired?'Passé':'Incorrect';
    tr.innerHTML = `
      <td class="td-num">${i+1}</td>
      <td class="td-cat"><span class="tbadge" style="border-color:${catColor(a.cat)};color:${catColor(a.cat)}">${a.cat}</span></td>
      <td class="td-q">${a.q}</td>
      <td><span class="${cls}">${lbl}</span></td>`;
    tb.appendChild(tr);
  });
}

// ── Init ───────────────────────────────────────────────────
function init() {
  // Bouton CTA → Mix
  document.getElementById('btn-start').addEventListener('click', () => startQuiz('mix'));

  // Clic thème → lancement direct dans ce thème
  document.querySelectorAll('.tcard').forEach(btn => {
    btn.addEventListener('click', () => {
      startQuiz(btn.dataset.mode);
    });
  });

  // Replay → retour home
  document.getElementById('btn-replay').addEventListener('click', () => {
    renderHistory();
    showScreen('screen-landing');
  });

  // Effacer historique
  document.getElementById('btn-clear-history')?.addEventListener('click', () => {
    if (confirm('Effacer tout l\'historique des sessions ?')) {
      try { localStorage.removeItem(HISTORY_KEY); } catch {}
      renderHistory();
    }
  });

  // Raccourcis clavier
  document.addEventListener('keydown', e => {
    if (!document.getElementById('screen-quiz').classList.contains('active')) return;
    if (['1','2','3','4'].includes(e.key)) pick(parseInt(e.key)-1);
  });

  // Init history
  renderHistory();
}

document.addEventListener('DOMContentLoaded', init);
