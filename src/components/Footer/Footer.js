

import React from "react";
import "../../assets/style/section-home.css"
import homepage from "../../assets/img/homepage-illustration.svg"


function SelfHeader() {
    return (
        <footer>
            <section>
                <figure>
                    <img
                        src={require("../../assets/img/pis.png")}
                        width="80"
                        eight="auto"
                    ></img>
                </figure>
            </section>
            <section>
                <nav>
                    <ul>
                        <li><a>S'inscrire</a></li>
                        <li><a>A propos de nous</a></li>
                        <li><a>Notre trajet</a></li>
                        <li><a>Nos sponsors</a></li>
                        <li><a>Contactez-nous</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <a className="btn">Je veux m'inscrire</a>
            </section>
        </footer>
    );
}

export default SelfHeader;
