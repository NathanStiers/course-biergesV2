import React from "react";
import "../../assets/style/section-sponsors.css"

function SponsorsCompose() {
    return (
        <section id="section-sponsors">
            <h2>Nos sponsors</h2>
            <article>
            <figure>
                <img src={require("../../assets/img/logo wavre .png")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/logo wavre .png")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/logo wavre .png")} />
            </figure>
            <figure>
                <img src={require("../../assets/img/logo wavre .png")} />
            </figure>
            </article>
            <h3>Merci à tous nos sponsors</h3>
        </section>


    );
}

export default SponsorsCompose;
