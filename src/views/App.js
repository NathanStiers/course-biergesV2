import React, {useState} from "react";

// core components
import SelfNavbar from "../components/Navbars/Navbar.js";
import SelfHeader from "../components/Headers/Header.js";
import About from "./About/AboutCompose"
import Trajet from "./Trajet/TrajetCompose"
import Sponsors from "./Sponsors/SponsorsCompose"
import Footer from "../components/Footer/Footer.js"
import ModalPaths from "./Modal"
import "../assets/style/app.css"

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <div id="html">
      <SelfNavbar c={handleClose} s={handleShow} show={show} />
      <SelfHeader />
      <div>
        <About c={handleClose} s={handleShow} show={show} />
        <ModalPaths show={show} handleClose={handleClose} />

        <Trajet />

        <Sponsors />
        <Footer/>
      </div>

      
    </div>
  );
}

export default App;
