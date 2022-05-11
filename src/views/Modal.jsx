import React from 'react';
import "../assets/style/app.css"

function ModalPaths({
    show, c
}) {

    return (
        <section className={show?"":"hidden"} onHide={c} id="section-inscription">
            <article>

            
            <h3>Procédure d'inscription</h3><br></br>
            <p><em>1)</em> Un seul virement par personne afin de respecter le formatage du commentaire (voir point 3).</p><br/>
            <p> <em>2)</em> Le prix demandé s'élève à 5€ si vous êtes membres de l'unité ou que vous avez moins de 18 ans. Autrement, la contribution demandée est de 7€. <br/>Veuillez effectuer le versement sur le compte <em>BE02 7320 4174 7740</em></p><br />
            <p> <em>3)</em> Pour que le payement puisse être pris en compte, il faut ajouter au virement le commentaire suivant :
            Nom/Prénom/Année de naissance (AAAA)/Adresse email (veuillez remplacer l'arobase (@) par un espace en communication)<br /><br />
            <em>Exemple : </em> Doe/John/1985/john gmail.com<br /><br /></p>
            <p>
                Le <em>formatage</em> étant très important, veillez à bien le respecter s'il vous plait.<br></br>
            </p>
            <p>En cas de problème ou de questions supplémentaires, n'hésitez pas à nous envoyer un mail : infos@6kmbierges.be.</p><br /><br />

            <a className="btn" variant="secondary" onClick={c}>
                Close
            </a>
            </article>
        </section>

    );
}
export default ModalPaths;