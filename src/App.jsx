// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Areas from "./components/Areas";
import Service from "./components/Services";
import LawyersTeam from "./components/LawyersTeam";
import Testimonials from "./components/Testimonials";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Areas />
      <Service />
      <LawyersTeam />
      <Testimonials />
      <Aboutus />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Law Minder</h6>
        <p>LawMinder © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
