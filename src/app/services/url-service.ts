
export class UrlService {

    uri = 'http://localhost/mamed/';
    appUrl = this.uri+'RESTFullController/'; //url de base de l'application ici on modifira lorsqu'on changera l'hote serveur by catrine
    login: string;
    journal: string;
    picture: string;
    approbation:string;
    mesure: string;
    message:string;
    stop:string;
    approuver: string;
    saveHours:string;
    onSaveHours:string;
    deleteMesure:string;
    editMesure:string;
    getLibele:string;
    newMesure:string;
    getNewMessage:string;

    constructor() {
        this.login = this.appUrl+'login/login.php';
        this.journal = this.appUrl+'Read/Patient/journal.php?id=';
        this.picture = this.uri+'fr/'
        this.approbation = this.appUrl+'Read/Patient/approbation.php?id=';
        this.mesure = this.appUrl+'Read/Patient/mesure.php?id=';
        this.message = this.appUrl+'Read/Patient/message.php?id=';
        this.stop = this.appUrl+'Delete/Patient/';
        //this.approuver = this.appUrl+'Create/Patient/approuver.php?id=';
        this.saveHours = this.appUrl+'Create/Patient/saveHours.php?idpersonne=';
        this.onSaveHours = this.appUrl+'Create/Patient/onSaveHours.php?idpersonne=';
        this.deleteMesure = this.appUrl+'Delete/Patient/onDeleteMesure.php?id=';
        this.editMesure=this.appUrl+'Update/Patient/editMesure.php?id=';
        this.getLibele = this.appUrl+'Read/Patient/getLibele.php';
        this.newMesure = this.appUrl+'Create/Patient/newMesure.php?id=';
        this.getNewMessage = this.appUrl+'Read/Patient/getNewMessage.php?id='

    }

    
}
