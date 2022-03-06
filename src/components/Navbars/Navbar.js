import React from "react";

function SelfNavbar({
  o
}) {

  const clipboardCopy = () => navigator.clipboard.writeText('infos@6kmbierges.be')
  const setMessage = () => {
    document.getElementById("contactLink").id = "copied";
    setTimeout(function(){
      document.getElementById("copied").id = "contactLink";
    },3000);
  }

  function contactClick() {
    clipboardCopy().then(() => {
      setMessage();
    }).catch(() => {
      alert("infos@6kmbierges.be")
    })
  }

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
          <li><a onClick={o}>S'inscrire</a></li>
          <li><a href="#section-about">A propos de nous</a></li>
          <li><a href="#section-trajet">Notre trajet</a></li>
          <li><a href="#section-sponsors">Nos sponsors</a></li>
          <li><a id="contactLink" onClick={contactClick}>Contactez-nous</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SelfNavbar;
