

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
                        width="90"
                        eight="auto"
                    ></img>
                </figure>
            </section>
            <section>
                    <p>Les billets ne pourront être remboursés en cas de désistements. 
                En cas d’annulation de l’événement pour cas de force majeure, de plus amples informations seront fournies.</p><br/>
                <a onClick={clipboardCopy}>infos@6kmbierges.be</a>
            </section>
        </footer>
    );
}

export default SelfHeader;
