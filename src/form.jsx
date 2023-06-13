// import components
import { useEffect } from "react";
import Login from "./pages/login";
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
      <Login />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Law Minder</h6>
        <p>LawMinder © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
