// import components
import { useEffect } from "react";
import Pages from "./components/Pages";
// =======
import Login from "./pages/login";
// >>>>>>> 3aa7915e12198cfe543b715f7cccadb3097672cb
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import KnowMore from "./components/KnowMore";


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
    <Routes>
      <Route path="/" element={<Pages/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
{/* <<<<<<< HEAD
    </Routes> */}
    
{/* ======= */}
      <Route path="/knowmore" element={<KnowMore/>}></Route>
    </Routes>
    
      <footer className="p-3 text-center">
        <h6 className="mb-3">Law Minder</h6>
        <p>LawMinder © All CopyRights Reserved 2023</p>
      </footer>
    </div>

  );
};

export default App;
