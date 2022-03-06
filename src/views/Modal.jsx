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
            <p> <em>2)</em> Versement de 5€ si vous êtes membre de l'unité de la 40e de Bierges et 7€ autrement.<br />
            IBAN : BE02 7320 4174 7740<br />
            BIC : XXXXXXXXXXXXX<br /><br /></p>
            <p> <em>3)</em> Pour que le payement puisse être pris en compte, il faut ajouter au virement le commentaire suivant :
            Nom/Prénom/Année de naissance (AAAA)/Adresse email<br /><br />
            <em>Exemple : </em> Doe/John/1985/john@gmail.com<br /><br /></p>
            <p>
                Le <em>formatage</em> étant très important, veillez à bien le respecter s'il vous plait.<br></br>
                <em>Date limite</em> de réception du virement : le 1er mai 2020
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