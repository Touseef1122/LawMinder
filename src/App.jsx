// import components
import { useEffect } from "react";
<<<<<<< HEAD
import Pages from "./components/Pages";
=======
<<<<<<< HEAD
import Pages from "./components/Pages";
=======
import Login from "./pages/login";
>>>>>>> 3aa7915e12198cfe543b715f7cccadb3097672cb
>>>>>>> 2de1a074909228c9ce0aed6b5bc3eea5194b4dec
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
<<<<<<< HEAD
=======
import KnowMore from "./components/KnowMore";
>>>>>>> 2de1a074909228c9ce0aed6b5bc3eea5194b4dec


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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2de1a074909228c9ce0aed6b5bc3eea5194b4dec
    <Routes>
      <Route path="/" element={<Pages/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
<<<<<<< HEAD
    </Routes>
    
=======
      <Route path="/knowmore" element={<KnowMore/>}></Route>
    </Routes>
    
=======
      <Navbar />
      <Hero />
      <Areas />
      <Service />
      <LawyersTeam />
      <Testimonials />
      <Aboutus />
      <Contact />
      <Login/>
>>>>>>> 3aa7915e12198cfe543b715f7cccadb3097672cb
>>>>>>> 2de1a074909228c9ce0aed6b5bc3eea5194b4dec
      <footer className="p-3 text-center">
        <h6 className="mb-3">Law Minder</h6>
        <p>LawMinder © All CopyRights Reserved 2023</p>
      </footer>
    </div>

  );
};

export default App;
