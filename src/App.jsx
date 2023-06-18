// import components
import { useEffect } from "react";
import Pages from "./components/Pages";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import KnowMore from "./components/KnowMore";
import Service1 from "./components/Service1";
import Service3 from "./components/Service3";
import Service2 from "./components/Service2";
import Profile2 from "./components/Profile2";
import Profile1 from "./components/Profile1";
import Profile3 from "./components/Profile3";

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
        <Route path="/" element={<Pages />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/knowmore" element={<KnowMore />}></Route>
        <Route path="/Service1" element={<Service1 />}></Route>
        <Route path="/Service2" element={<Service2 />}></Route>
        <Route path="/Service3" element={<Service3 />}></Route>
        <Route path="/profile1" element={<Profile1 />}></Route>
        <Route path="/profile2" element={<Profile2 />}></Route>
        <Route path="/profile3" element={<Profile3 />}></Route>

      </Routes>

      <footer
        className="p-3 text-center"
        style={{ backgroundColor: "#b6ccf5" }}
      >
        <h6 className="mb-3">Law Minder</h6>
        <p>LawMinder © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
