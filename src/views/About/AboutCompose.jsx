import React from "react";
import "../../assets/style/section-about.css"
import one from "../../assets/img/about-illustration-1.svg"
import two from "../../assets/img/about-illustration-2.svg"
import three from "../../assets/img/about-illustration-3.svg"
import four from "../../assets/img/about-illustration-4.svg"
import five from "../../assets/img/about-illustration-5.svg"
import six from "../../assets/img/about-illustration-6.svg"

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutCompose({
    c, s, show
}) {
    return (
        <section id="section-about">
            <h2>A propos de nous</h2><br/><br/><br/>
            <p className="middle">Nous avons l’immense plaisir de vous annoncer le lancement de la course des 6 km de Bierges. Le but étant de nous aider à financer un voyage humanitaire durant 15 jours en juillet.</p>
            <article>
                <div>
                    <img src={one}></img>
                    <p>Pour la première fois depuis leur création, <em>les horizons de la 40e</em> unité de Bierges vous convient à un évènement d’une envergure sans pareil.</p>
                </div>
            
                <div>
                    <img src={two}></img>
                    <p>Ouverte aux filles, aux garçons, aux jeunes et aux moins jeunes, cette course se veut <em>intergénérationnelle</em> et ouverte à tous !</p>
                </div>
            
                <div>
                    <img src={three}></img>
                    <p>Venez <em>remporter la coupe</em> ou bien simplement de passer du bon temps. Plusieurs activités seront prévues tel qu’une grande <em>tombola</em> et bien d’autres surprises.</p>
                </div>
           
                <div>
                    <img src={four}></img>
                    <p>Ce rassemblement aura lieu le samedi <em>14 mai entre 10 h et midi</em>. Le départ se fera à la salle Jules Colette et se terminera au même endroit.</p>
                </div>
           
                <div>
                    <img src={five}></img>
                    <p>On sait que vous avez déjà hâte d’y être alors nous vous attendons en forme et avec <em>votre bonne humeur</em> pour mettre le feu. </p>
                </div>
           
                <div>
                    <img src={six}></img>
                    <p>Les billets ne pourront être remboursés en cas de désistements. En cas d’annulation de l’événement pour cas de force majeure, de plus <em>amples informations</em> seront fournies.</p>
                </div>
            </article>
        </section>
    );
}

export default AboutCompose;
