import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Numbers from "../components/Numbers";
import Dashboard from "../components/Dashboard";
import Purpose from "../components/Purpose";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
      <Dashboard />
      <Purpose />
      <Services />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
