import React, {useState} from "react";

// core components
import SelfNavbar from "../components/Navbars/Navbar.js";
import SelfHeader from "../components/Headers/Header.js";
import About from "./About/AboutCompose"
import Trajet from "./Trajet/TrajetCompose"
import Sponsors from "./Sponsors/SponsorsCompose"
import ModalPaths from "./Modal"

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
    <div >
      <SelfNavbar c={handleClose} s={handleShow} show={show} />
      <SelfHeader />
      <div>
        <About c={handleClose} s={handleShow} show={show} />
        <ModalPaths show={show} handleClose={handleClose} />
        <hr />
        <Trajet />
        <hr />
        <Sponsors />
      </div>

      
    </div>
  );
}

export default App;
