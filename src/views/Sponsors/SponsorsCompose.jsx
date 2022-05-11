import React from "react";
import "../../assets/style/section-sponsors.css"
import sponsors from "../../assets/img/sponsors-illustration.svg"
import LogoUnite from "../../assets/img/Logo40e_2019.svg"

function SponsorsCompose() {
    return (
 
        <section id="section-sponsors">
            <h2>Nos sponsors</h2>
            <article>
            <figure>
                <img src={require("../../assets/img/logo wavre .png")} />
            </figure>
            <figure>
                <img src={LogoUnite} />
            </figure>
            <figure>
                <img src={require("../../assets/img/logo_gcb.png")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/carette.png")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/yr.png")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/ooak.png")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/pierre.jpg")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/prprint.jpg")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/jaune2.jpg")} />
            </figure>
            </article>
            <figure id="sponsors-start">
                <img src={sponsors} />
            </figure>
            <br/><h3 className="center">Merci à tous nos sponsors</h3>
        </section>


    );
}

export default SponsorsCompose;
