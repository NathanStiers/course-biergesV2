import React from "react";

function SelfNavbar() {

  const clipboardCopy = () => navigator.clipboard.writeText('infos@6kmbierges.be')

  return (
    <div id="header">
      <figure>
        <img
              src={require("../../assets/img/pis.png")}
              width="80"
              height="auto"
            ></img>
            </figure>
      <nav>
        <ul>
          <li><a href="#">S'inscrire</a></li>
          <li><a href="#section-about">A propos de nous</a></li>
          <li><a href="#section-trajet">Notre trajet</a></li>
          <li><a href="#section-sponsors">Nos sponsors</a></li>
          <li><a href="#section-contact" onClick={clipboardCopy}>Contactez-nous</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SelfNavbar;
