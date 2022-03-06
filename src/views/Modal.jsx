import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "../assets/style/app.css"

function ModalPaths({
    show, c
}) {

    return (
        <>
            <Modal isOpen={show} onHide={c} >
                <ModalHeader >
                    <h3>Procédure d'inscription</h3>
                </ModalHeader>
                <ModalBody >
                    <b>1)</b> Un seul virement par personne afin de respecter le formatage du commentaire (voir point 3).<br /><br />
                    <b>2)</b> Versement de 5€ si vous êtes membre de l'unité de la 40e de Bierges et 7€ autrement.<br />
                    IBAN : BE02 7320 4174 7740<br />
                    BIC : XXXXXXXXXXXXX<br /><br />
                    <b>3)</b> Pour que le payement puisse être pris en compte, il faut ajouter au virement le commentaire suivant :
                    Nom/Prénom/Année de naissance (AAAA)/Adresse email<br /><br />
                    <b>Exemple : </b> Doe/John/1985/john@gmail.com<br /><br />
                    <center>
                        Le <b>formatage</b> étant très important, veillez à bien le respecter s'il vous plait.<br></br>
                        <b>Date limite</b> de réception du virement : le 1er mai 2020
                    </center>
                    En cas de problème ou de question supplémentaire, n'hésitez pas à nous envoyer un mail : infos@6kmbierges.be
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={c} className="m-1">
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default ModalPaths;