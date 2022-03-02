import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function ModalPaths({
    show, handleClose
}) {

    return (
        <>
            <Modal isOpen={show} onHide={handleClose} >
                <ModalHeader >
                    Fonctionnement de l'inscription
                </ModalHeader>
                <ModalBody >
                    <b>1)</b> Un virement égal une seule personne inscrite !<br /><br />
                    <b>2)</b> Versement de 5€ si vous êtes membre de l'unité de la 40e de Bierges et 7€ autrement.<br />
                    IBAN : BE02 7320 4174 7740<br />
                    BIC : XXXXXXXXXXXXX<br /><br />
                    <b>3)</b> Pour que le payement puisse être pris en compte, il faut ajouter au virement le commentaire suivant :
                    Nom/Prénom/Sexe (H/F)/Année de naissance (AAAA)/Club (si pas de club alors veuillez indiquer "non")/Adresse email<br /><br />
                    <b>Exemple : </b> Doe/John/H/1985/Club Dorothée/john@gmail.com<br /><br />
                    <center>
                        Le <b>formatage</b> est très important donc veillez à bien le respecter s'il vous plait.<br></br><b>Date limite</b> pour laquelle le virement doit avoir été receptionné : le 1er mai 2020
                    </center>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handleClose} className="m-1">
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default ModalPaths;