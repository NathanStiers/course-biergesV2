import React from "react";
import "../../assets/style/section-home.css"
import homepage from "../../assets/img/homepage-illustration.svg"


function SelfHeader() {
  return (
    <section id="section-home">
      <article>
        <div>
          <p class="right">Organisé par les horizons<br /> de la 40e de Bierges</p>
          <h1>Les 6km <br />de Bierges</h1>
          <h3>Prévu le 14 mai 2022</h3>
        </div>
        <a class="btn">Je veux m'inscrire</a>
      </article>
      <article>
        <img
          src={homepage}
        ></img>
      </article>
    </section>
  );
}

export default SelfHeader;
