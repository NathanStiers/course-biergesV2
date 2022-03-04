

import React from "react";
import "../../assets/style/section-home.css"
import homepage from "../../assets/img/homepage-illustration.svg"

const clipboardCopy = () => navigator.clipboard.writeText('infos@6kmbierges.be')

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
                        <li><a onClick={clipboardCopy}>Contactez-nous</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <a className="btn">Je veux m'inscrire</a>
            </section>
            <section>
                Les billets ne pourront être remboursés en cas de désistements. 
                En cas d’annulation de l’événement pour cas de force majeure, de plus amples informations seront fournies.
            </section>
        </footer>
    );
}

export default SelfHeader;
