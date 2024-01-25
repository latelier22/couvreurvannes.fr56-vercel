export const site = {
  title: 'TECHNIQUE COUVERTURE',
  description: 'TECHNIQUE COUVERTURE - Tyron MIQUEL- 0780698451',
  societe : "TECHNIQUE COUVERTURE",
  contact : "Tyron MIQUEL",
  telephone: "0780698451",
  adresse: "La villeneuve postic",
  codePostal : "56000",
  ville : "VANNES",
  email : "tayronmiquel.6@icloud.com",
  logo : {url :"images/logo-barre-du-haut.png", alt :"logo Technique couverture"},
  Logo : {url :"images/logo-banniere.png", alt :"logo Technique couverture"}
};

export const menuItems = [
    { label: "Accueil", route: "/" },
    { label: "Entretien", route: "/entretien" },
    { label: "Réparation", route: "/reparation" },
    { label: "Peinture", route: "/peinture" },
    { label: "Travaux divers", route: "/travaux-divers" },
    { label: "Fuites", route: "/fuites" },
    { label: "Gouttières", route: "/gouttieres" },
    { label: "Contact", route: "/contact" },
  ];

export const listesActions =[
    {
      title : "ENTRETIEN",
      subTitle : "Entretenez vos jardins grâce à nos services :",
      photo : { url: "Rectangle_8.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Élagage","Entretien de pelouse","Désherbage","Petit aménagement jardin"
        ]
    },{
      title : "ELAGUAGE",
      subTitle : "Prenez soins de vos arbres grâce à notre Élagueur :",
      photo : { url: "Tailler-les-haies-et-buissons-.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["entretien régulier, en respectant la forme de l’arbre et en le stimulant.",
      "Éviter la poussé des arbres adultes", "limite le développement des arbres enles maintenant dans une forme donnée."
        ]
    }
    ,
    {
      title : "PELOUSE",
      subTitle : "Entretenez vos jardins grâce à nos services :",
      photo : { url: "jambes-feminines-femme-aide-to.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : [
      "Coupe de votre herbe quelque sois la hauteur",
      "Nettoyage des résidus de tonte",
      " Envoie a la déchèterie"
        ]
    }
    
    ,{
      title : "DESHERBAGE",
      subTitle : "Retirer vos mauvaise herbe avec nos technique de désherbage :",
      photo : { url: "imagepng.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Désherbage mécanique : Utilisation d'outils comme des binettes, des houes ou des désherbeurs pour enlever les mauvaises herbes. Les outils mécaniques facilitent le travail, surtout dans de grandes zones."
      ,"Désherbage chimique : Utilisation de produits chimiques, tels que des herbicides, pour tuer les mauvaises herbes. Il est essentiel de suivre les instructions et de prendre des précautions lors de l’utilisation de produits chimiques."
        ]
    }
    ,{
      title : "AMENAGEMENT",
      subTitle : "Aménager vos extérieurs pour un espace de détente :",
      photo : { url: "images-2.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Petit aménagement exérieur"
        ]
    },
    {
      title : "TRAVAUX DIVERS",
      subTitle : "Aménager vos extérieurs pour un espace de détente :",
      photo : { url: "images-2.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Petit aménagement exérieur"
        ]
    }
    ]
    
      
export const Pages = {
      entretien: {
        title: "Entretien",
        description: "Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.",
        photos : [
          { url: "entretien-1.png", alt: "gallery" },
          { url: "entretien-2.png", alt: "gallery" },
          { url: "entretien-3.png", alt: "gallery" },
          { url: "entretien-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
        ],
        cards : []
      },
      reparation: {
        title: "Réparation",
        description: "Réparation des toitures, remplacement des tuiles, ardoises, tôles.",
        photos : [
          { url: "reparation-1.png", alt: "gallery" },
          { url: "reparation-2.png", alt: "gallery" },
          { url: "reparation-3.png", alt: "gallery" },
          { url: "reparation-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4">
            <li>• Réparation des toitures, remplacement des tuiles, ardoises, tôles.</li>
            <li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li>
            <li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li>
            </ul>
          },
        ],
        cards : []
      },
      peinture: {
        title: "Peinture",
        description: "Peinture boiseries, peinture sur toitures.",
        photos : [
          { url: "peinture-1.png", alt: "gallery" },
          { url: "peinture-2.png", alt: "gallery" },
          { url: "peinture-3.png", alt: "gallery" },
          { url: "peinture-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4">
            <li>• Peinture boiseries, peinture sur toitures.</li>
            <li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li>
            <li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li>
            </ul>
          },
        ],
        cards : []
      },
      "travaux-divers": {
        title: "travaux divers",
        description: "Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.",
        photos : [
          { url: "travaux-divers-1.png", alt: "gallery" },
          { url: "travaux-divers-2.png", alt: "gallery" },
          { url: "travaux-divers-3.png", alt: "gallery" },
          { url: "travaux-divers-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
          {
            title: "NOS SAVOIR FAIRE 2:",
            body : <ul className="list-disc pl-4"><li>• Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
          
        ],
        cards : []
      },
      
      "fuites": {
        title: "Réparation",
        description: "Contenu pour la page de réparation...",
        photos : [
          { url: "fuites-1.png", alt: "gallery" },
          { url: "fuites-2.png", alt: "gallery" },
          { url: "fuites-3.png", alt: "gallery" },
          { url: "fuites-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
        ],
        cards : [
          
        ],
      },
      "gouttieres": {
        title: "Gouttières",
        description: "Contenu pour la page de réparation...",
        photos : [
          { url: "gouttiere-1.png", alt: "gallery" },
          { url: "gouttiere-2.png", alt: "gallery" },
          { url: "gouttiere-3.png", alt: "gallery" },
          { url: "gouttiere-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
        ],
        cards : [
          
        ],
      },
      // Ajoutez d'autres données au besoin
    };
    
   