import React from "react";
import "../../assets/style/section-about.css"

import horizon40e from "../../assets/img/about-illustration-horizon40e.svg"
import intergenerationnelle from "../../assets/img/about-illustration-intergenerationnelle.svg"
import surprise from "../../assets/img/about-illustration-surprise.svg"
import calendrier from "../../assets/img/about-illustration-calendrier.svg"
import humeur from "../../assets/img/about-illustration-humeur.svg"

function AboutCompose() {
    return (
        <section id="section-about">
            <h2>A propos de nous</h2><br/><br/><br/>
            <p className="middle">Nous avons l’immense plaisir de vous annoncer le lancement de la course des 6 km de Bierges. Aidez-nous à financer un voyage humanitaire de 15 jours en juillet.</p>
            <article>
                <div>
                    <img src={horizon40e}></img>
                    <p>Pour la première fois depuis leur création, <em>les horizons de l'unité de la 40e</em> de Bierges vous invitent à un évènement d’une envergure sans pareil.</p>
                </div>
            
                <div>
                    <img src={intergenerationnelle}></img>
                    <p>Ouverte aux filles, aux garçons, aux jeunes et aux moins jeunes, cette course se veut <em>intergénérationnelle</em> et accessible à tous !</p>
                </div>
            
                <div>
                    <img src={surprise}></img>
                    <p>Venez <em>remporter la coupe</em> ou simplement passer du bon temps en bonne compagnie.</p>
                </div>
           
                <div>
                    <img src={calendrier}></img>
                    <p>Rendez-vous le <em>samedi 14 mai entre 10 h et midi</em>. Le départ se fera à la salle Jules Colette et se terminera au même endroit.</p>
                </div>
           
                <div>
                    <img src={humeur}></img>
                    <p>On sait que vous avez déjà hâte d’y être alors nous vous attendons en forme et avec <em>votre bonne humeur</em> pour mettre le feu. </p>
                </div>
            </article>
        </section>
    );
}

export default AboutCompose;
