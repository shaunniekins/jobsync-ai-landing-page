import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Numbers from "../components/Numbers/Numbers";
import Dashboard from "../components/Dashboard/Dashboard";
import Purpose from "../components/Purpose/Purpose";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Faqs from "../components/Faqs/Faqs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-screen">
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
    </div>
  );
}
// Need fix: testimonials,
