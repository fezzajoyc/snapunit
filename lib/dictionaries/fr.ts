import type { Dictionary } from "../i18n";

// Français (fr) — vouvoiement constant, sans anglicismes évitables.
// Contrat : forme des clés identique à en (tests/seo.test.ts), valeurs en français.
const fr: Dictionary = {
  brand: "SnapUnit",
  tagline: "Chaque conversion s'exécute dans votre navigateur.",
  metaDesc:
    "6 convertisseurs d'unités précis : longueurs (des millimètres aux années-lumière), masse, température, consommation, formats de papier et angles. Tout dans votre navigateur : gratuit, sans inscription, rien n'est envoyé.",

  nav: {
    tools: "Tous les outils",
    categories: "Catégories",
    about: "À propos",
    menu: "Menu",
    language: "Langue",
  },

  home: {
    heroTitle: "Chaque unité, convertie instantanément — des millimètres aux années-lumière",
    heroSub:
      "{n} convertisseurs qui vont plus loin que d'habitude : quinze longueurs des millimètres aux années-lumière, cinq échelles de température, la consommation et sa relation inverse en MPG, les formats de papier et les angles. Tout se calcule dans votre navigateur — rapide, gratuit, sans inscription.",
    browseAll: "Voir tous les outils",
    pinned: "Épinglés",
    pin: "Épingler",
    unpin: "Désépingler",
    popular: "Populaires en ce moment",
    categoriesTitle: "Catégories",
    featuredTitle: "Outils populaires",
    trustLocal: "Les nombres restent sur votre appareil",
    trustFree: "Gratuit, sans compte",
    trustFast: "Instantané, fonctionne hors ligne",
    rotating: [
      "De 10 L/100km aux MPG — l'inverse géré correctement, gallons US et impériaux séparés",
      "A4 face à Letter d'un coup d'œil — les 25 formats de papier en mm, cm et pouces",
      "180 degrés, c'est π radians — l'angle en six unités à la fois",
      "Des millimètres aux années-lumière : une saisie, quinze longueurs",
    ],
    statsLabels: { tools: "outils", languages: "langues", uploads: "envois", accounts: "comptes" },
    eyebrow: "Gratuit, pour toujours",
    heroCtaSecondary: "Comment ça marche",
    statsTools: "{n} outils",
    statsLanguages: "{n} langues",
    statsUploads: "0 envoi",
    statsAccounts: "0 compte",
    categoriesSub: "Tous les convertisseurs au même endroit — chacun centré sur une famille d'unités, creusé à fond.",
    popularSub: "Les outils que l'on ouvre le plus.",
    privacyTitle: "Rien de ce que vous tapez ne quitte votre appareil.",
    privacySub:
      "Il n'y a aucune étape d'envoi. Les convertisseurs sont du JavaScript exécuté dans votre navigateur — ce n'est pas une promesse de politique, c'est leur conception.",
    privacyPoint1T: "Traitement local",
    privacyPoint1D:
      "Les valeurs sont converties en mémoire, sur votre appareil. Rien n'est transmis, nulle part.",
    privacyPoint2T: "Aucun compte",
    privacyPoint2D: "Pas d'inscription, pas d'e-mail, pas d'historique conservé. Ouvrez un outil et utilisez-le.",
    privacyPoint3T: "Honnête par conception",
    privacyPoint3D:
      "Si quelque chose ne peut réellement pas être fait dans le navigateur, nous le disons au lieu de le faire semblant.",
    privacyLink: "Lire la note de confidentialité complète",
    endTitle: "Choisissez un outil. Il fonctionne, tout simplement.",
    endSub: "Cinq langues, zéro envoi, rien à installer.",
  },

  tools: {
    title: "Tous les outils",
    subtitle: "Cherchez parmi {count} outils gratuits dans le navigateur. Sans envoi, sans inscription.",
    filterPlaceholder: "Rechercher un outil…",
    count: "{count} outils",
    empty: "Aucun outil ne correspond à « {query} ».",
  },

  categories: {
    pdf: { name: "PDF", desc: "Fusionnez, divisez, convertissez et modifiez des fichiers PDF sans les envoyer nulle part." },
    image: { name: "Image", desc: "Compressez, redimensionnez, recadrez et convertissez des images directement dans votre navigateur." },
    text: { name: "Texte", desc: "Comptez, nettoyez, triez et transformez du texte instantanément, pendant la saisie." },
    developer: { name: "Développement", desc: "Formateurs, encodeurs, décodeurs et générateurs pour le quotidien du développeur." },
    seo: { name: "SEO", desc: "Balises meta, données structurées, aperçu SERP et autres assistants de référencement." },
    security: { name: "Sécurité", desc: "Mots de passe, empreintes et vérifications — générés et contrôlés sur votre appareil." },
    utility: { name: "Utilitaires", desc: "Longueur, masse, température, consommation, formats de papier et angles — chaque conversion est calculée sur votre appareil." },
  },

  tool: {
    howTo: "Mode d'emploi",
    faq: "Questions fréquentes",
    related: "Outils associés",
    nextStep: "Étapes suivantes",
    copyLink: "Copier le lien",
    privacyNote:
      "Cet outil s'exécute entièrement dans votre navigateur. Vos données ne quittent jamais votre appareil — elles ne sont envoyées à aucun serveur.",
    inCategory: "Plus d'outils dans {category}",
    backToCategory: "Tous les outils {category}",
  },

  common: {
    openTool: "Ouvrir l'outil",
    copy: "Copier",
    copied: "Copié",
    download: "Télécharger",
    reset: "Réinitialiser",
    swap: "Inverser",
    clear: "Effacer",
    error: "Une erreur est survenue. Vérifiez votre saisie et réessayez.",
    input: "Entrée",
    output: "Résultat",
    settings: "Options",
    dropFiles: "Déposez des fichiers ici ou cliquez pour choisir",
    dropFile: "Déposez un fichier ici ou cliquez pour choisir",
    processing: "Traitement…",
    fileSize: "Taille",
    sample: "Essayer un exemple",
    uppercase: "MAJUSCULES",
  },

  unit: {
    from: "De",
    to: "Vers",
    amount: "Quantité",
    result: "Résultat",
    common: "Conversions courantes",
    formula: "Formule",
    allUnits: "Toutes les unités",
    width: "Largeur",
    height: "Hauteur",
    area: "Aire",
  },

  text: {
    stats: {
      words: "Mots",
      characters: "Caractères",
      charsNoSpaces: "Sans espaces",
      sentences: "Phrases",
      paragraphs: "Paragraphes",
      lines: "Lignes",
      readingTime: "Temps de lecture",
      readingMinutes: "{n} min de lecture",
    },
  },

  footer: {
    line: "Des convertisseurs d'unités qui tournent dans votre navigateur. Rien de ce que vous tapez ne quitte votre appareil.",
    privacy: "Confidentialité",
    terms: "Conditions",
    about: "À propos",
    badges: "Badges",
    language: "Langue",
  },

  badge: {
    title: "Badges SnapUnit",
    desc: "Ajoutez un badge SnapUnit à votre site, README ou documentation. Il renvoie ici et indique que les convertisseurs fonctionnent entièrement dans le navigateur.",
    voluntary: "L'intégration est entièrement volontaire — prenez un badge si le projet vous plaît. Aucune autorisation nécessaire.",
    md: "Markdown (README)",
    html: "HTML (site web)",
    thanks: "Merci de faire passer le mot — chaque intégration aide plus de personnes à découvrir des outils qui respectent leurs fichiers.",
  },

  embed: {
    title: "Intégrer cet outil",
    desc: "Ajoutez cet outil à votre site en une ligne — il s'exécute dans le navigateur du visiteur.",
  },

    mcp: {
    title: "Serveur MCP — outils accessibles aux IA",
    desc1: "SnapUnit fournit un serveur MCP (Model Context Protocol) : les assistants IA comme Claude ou Cursor peuvent exécuter les mêmes convertisseurs que sur ce site — même logique testée, aucune réimplémentation.",
    desc2: "Les outils exécutent les fonctions pures du site : longueur (des millimètres aux années-lumière), masse, température, angles, consommation et sa relation inverse en MPG, dimensions exactes des papiers. L'exécution a lieu sur la machine du client IA via npx — rien n'est envoyé à nos serveurs.",
    toolsTitle: "Outils exécutables ({n})",
    requiresNode: "Nécessite Node.js 18+. Le serveur tourne localement en stdio ; seuls les appels que vous lancez sont calculés sur votre machine.",
    privacy: "Nécessite Node.js 18+. Le serveur tourne localement en stdio ; seuls les appels que vous lancez sont calculés sur votre machine.",
  },

    notFound: {
    title: "Page introuvable",
    body: "L'outil que vous cherchez n'existe pas. Parcourez plutôt tous les outils.",
    home: "Retour à l'accueil",
  },
};

export default fr;
