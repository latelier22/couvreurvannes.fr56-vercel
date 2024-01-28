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

  // DÃ©clarer les photos dans un tableau d&apos;objets
  const photos = [];

  

  const cards = [
    {
      title: "ENTRETIEN",
      text: "",
      button: "DÃ©tail",
      buttonColor: "bg-sky-500",
      link: "/entretien",
      url: "menu-entretien.png",
      alt: "",
    },

    {
      title: "REPARATION",
      text: "",
      button: "COMMANDEZ !",
      buttonColor: "bg-orange-500",
      link: "/reparation",
      url: "menu-reparation-toiture.png",
      alt: "",
    },

    {
      title: "PEINTURE",
      text: "",
      button: "COMMANDEZ !",
      buttonColor: "bg-primary-700",
      link: "/peinture",
      url: "menu-peinture.png",
      alt: "",
    },

    {
      title: "TRAVAUX DIVERS",
      text: "",
      button: "COMMANDEZ !",
      buttonColor: "bg-primary-700",
      link: "/travaux-divers",
      url: "menu-travaux-divers.png",
      alt: "",
    },
    
  ];


  const sections = [
    {
      title: "ENTRETIEN",
      body : " des solutions exceptionnelles pour répondre à vos besoins en matière de toiture.Que ce soit pour la réparation, l'entretien, la gestion des fuites de toit, les peinture des toitures et boiseries ou d'autres travaux divers de maÃ§onnerie, nous sommes là pour vous offrir des services fiables et professionnels. Explorez nos différentes sections pour en savoir plus sur nos activités."
    },
    {
      title: " NOS SAVOIRS FAIRES",
      body : <ul className="list-disc pl-4"><li>Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li>
      <li>Intervention 7/7 J - 24/24h en cas d&apos;urgences ou fuites de votre toiture.</li>
      <li>Pose de bâche en casd&apos;urgence, mise hors d&apos;eau, remplacement des tuiles, ardoises.</li>
      <li>Peinture boiseries, peinture sur toitures.</li>
      <li>Réparation, nettoyage ou remise à neuf de votre gouttière.</li>
      <li>Petits travaux de ma&ccedil;onnerie, mur en pierre, parpaings, brique, allées, pavés pierre, pavés autobloquants, petite dalle, terrasse...</li></ul>
    },
  ]




  const backgroundColor = "bg-teal-500";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <HeaderSimple photos={photos} title={pageTitle}/>
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
