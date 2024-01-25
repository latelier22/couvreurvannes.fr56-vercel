import React from "react";
import RootLayout from "../app/layout";
import Navbar from "./NavBar";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Pictos from "./Pictos"
import Cards from "./Cards";
import Section from "./Section";

const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = "Accueil";
  const pageDescription = "Bienvenue sur le site de PRO COUVERTURE LOUDEAC";

  // Déclarer les photos dans un tableau d'objets
  const photos = [];

  

  const cards = [
    {
      title: "ENTRETIEN",
      text: "Acheter votre véhicule pour faire des balades avec ou organiser des courses entre ami(e)s.",
      button: "Détail",
      buttonColor: "bg-sky-500",
      link: "/entretien",
      url: "menu-entretien.png",
      alt: "Acheter votre véhicule pour faire des balades avec ou organiser des courses entre ami(e)s.",
    },

    {
      title: "REPARATION",
      text: "Apprendre en s'ammusant",
      button: "COMMANDEZ !",
      buttonColor: "bg-orange-500",
      link: "/reparation",
      url: "menu-reparation-toiture.png",
      alt: "Apprendre en s'ammusant",
    },

    {
      title: "PEINTURE",
      text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
      button: "COMMANDEZ !",
      buttonColor: "bg-primary-700",
      link: "https://dev-54ta5gq-tz7gps24d2hqk.fr-3.platformsh.site/fr_FR/taxons/vehicules-radio-commandes",
      url: "menu-peinture.png",
      alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    },

    {
      title: "TRAVAUX DIVERS",
      text: "Faîtes le plein d'idées cadeaux",
      button: "COMMANDEZ !",
      buttonColor: "bg-primary-700",
      link: "https://dev-54ta5gq-tz7gps24d2hqk.fr-3.platformsh.site/fr_FR/taxons/cadeaux",
      url: "menu-travaux-divers.png",
      alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    },
    
  ];


  const sections = [
    {
      title: "ENTRETIEN",
      body : " des solutions exceptionnelles pour répondre à vos besoins en matière de toiture.Que ce soit pour la réparation, l'entretien, la gestion des fuites de toit, les peinture des toitures et boiseries ou d'autres travaux divers de maçonnerie, nous sommes là pour vous offrir des services fiables et professionnels. Explorez nos différentes sections pour en savoir plus sur nos activités."
    },
    {
      title: " NOS SAVOIRS FAIRES",
      body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises.</li><li>Peinture boiseries, peinture sur toitures.</li><li>Réparation, nettoyage ou remise à neuf de votre gouttière.</li><li>Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.</li></ul>
    },
  ]




  const backgroundColor = "bg-teal-500";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <HeaderSimple photos={photos} />
      <Pictos />

      <div className="bg-white">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>

      <Section section={sections[0]} />
      <Section section={sections[1]} />

      <Footer />
    </RootLayout>
  );
};

export default Home;
