import React from "react";
import "../../assets/style/section-sponsors.css"
import sponsors from "../../assets/img/sponsors-illustration.svg"

// reactstrap components
import { Container, Row, Col, Media } from "reactstrap";

// core components

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
            <figure id="sponsors-start">
                <img src={sponsors} />
            </figure>
            <h3>Merci à tous nos sponsors</h3>
        </section>


    );
}

export default SponsorsCompose;
