import React from "react";

function SelfNavbar() {

  const clipboardCopy = () => navigator.clipboard.writeText('infos@6kmbierges.be')

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
          <li><a onClick={clipboardCopy}>Contactez-nous</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SelfNavbar;
