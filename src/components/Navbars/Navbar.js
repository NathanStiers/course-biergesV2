import React, {useState} from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function SelfNavbar({
  c, s, show
}) {

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <div id="header">
      <figure>
        <img
              src={require("../../assets/img/run.png")}
              width="80"
              eight="auto"
            ></img>
            </figure>
      <nav>
        <ul>
          <li><a>S'inscrire</a></li>
          <li><a>A propos de nous</a></li>
          <li><a>Notre trajet</a></li>
          <li><a>Nos sponsors</a></li>
          <li><a>Contactez-nous</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SelfNavbar;
