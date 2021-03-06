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
import "../assets/style/mobile-450px.css"

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
      <SelfNavbar o={handleShow} />
      <SelfHeader o={handleShow} />
      <div class="scroll-container">
        <About />
        <ModalPaths show={show} c={handleClose} />
        <Trajet o={handleShow} />
        <Sponsors />
        <Footer />
      </div>

      
    </div>
  );
}

export default App;
