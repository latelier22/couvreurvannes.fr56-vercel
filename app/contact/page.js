import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";

const Contact = () => {
  const pageTitle = 'Contact';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      
      <Footer />
    </RootLayout>
  );
};

export default Contact;
