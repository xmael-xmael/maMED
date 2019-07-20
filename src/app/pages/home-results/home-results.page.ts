import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../services/url-service';
import { GetInfosService } from '../../services/getInfos-service';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController,
  Events,
   } from '@ionic/angular';


import { Router, ActivatedRoute } from '@angular/router';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { element } from 'protractor';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  idPers: string;
  

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private urlService: UrlService,
    public events: Events,
    public getInfosService: GetInfosService,

  ) 
  {

  }
  clara: boolean = false;
  clara1: boolean = false;
  rapelRepas;repas;
  showt = "";
  Voir = " Voir mes infos";
  rapelHypo;

  saveHours(){

    let urlSaveHours = this.urlService.saveHours+this.getInfosService.data.idpersonne+'&startstop='+this.repas;
          this.http.post(urlSaveHours, JSON.stringify(this.json))
              .subscribe(data=>{ 
                if(data=="success")
                {
                  this.onAlert('Quel success','Heure de rapel repas mise ajour avec succes');
                }
                else{
                  this.onAlert('Echec','Quelque chose a mal tournée signalé au service d\'assistance');
                }
      },
      (err)=>{
        this.onAlert('Echec','Quelque chose a mal tournée signalé au service d\'assistance');
      });
  }

  preventive;
  onSaveHours(){
    let onSaveHours = this.urlService.onSaveHours+this.getInfosService.data.idpersonne+'&startstop='+this.preventive;
          this.http.post(onSaveHours, JSON.stringify(this.json))
              .subscribe(data=>{ 
                if(data=="success")
                {
                  this.onAlert('Quel success','Heure de rapel Hypoglemie mise ajour avec succes');
                }
                else{
                  this.onAlert('Echec','Quelque chose a mal tournée signalé au service d\'assistance');
                }
      },
      (err)=>{
        this.onAlert('Echec','Quelque chose a mal tournée signalé au service d\'assistance');
      });
  }

  async onAlert(par: string, param:string){
    const alert = await this.alertCtrl.create({
      header: par,
      message: param,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  onShow(voir:string){
    
    this.Voir=voir;
    if(this.Voir == "Voir mes infos"){
        this.Voir="Cacher mes infos"
        this.showt = "clara";
    }
    else{
      this.Voir="Voir mes infos";
      this.showt = "";
    }
  }
  onSave(){
    this.clara = !this.clara;
  }
  onSave1(){
    this.clara1 = !this.clara1;
  }
  json = {
    idpers: this.idPers,
  }
  menu: any;
  foletia: string;
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.idPers = this.route.parent.snapshot.paramMap.get('idUser');
    console.log(this.idPers);
    this.getJournal(this.idPers);
    //this.presentLoading();
    this.foletia = this.getInfosService.foletia;
    this.tcheck();

  }
  tcheck(){
    if(this.attente=='false'){
      this.presentLoading();
    }
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Patientez 300 ms',
      duration: 300
    });
    return await loading.present();
  }

  appUrlLogin = this.urlService.journal;
  name:string;
  picture: string;
  catrine;
  medecinN;
  specialite;
  idpatient;
  idphm;idmedecin;vare;
  attente='false';
  getJournal(idpers: string){
    this.http.post(this.appUrlLogin+idpers, JSON.stringify(this.json))
      .subscribe(data=>{ 
        //console.log(data);
        this.menu = data;
        this.attente = 'true';
        
         
          //console.log(this.menu.idpatient);
        this.name = this.menu.prenom+' '+this.menu.nom;
        this.events.publish('nom',this.name);//publication du name
        this.picture = this.urlService.picture+this.menu.chemin;
        this.events.publish('picture',this.picture);//publication de la photo de profil
        this.events.publish('status','Patient');
        this.events.publish('infos',this.menu);
        this.getInfosService.data = this.menu;
        console.log(this.getInfosService.data);
        this.idpatient = this.getInfosService.data.idpatient;


        this.idphm = this.getInfosService.data.idphm;
        this.vare = typeof this.idphm;
        

        this.idmedecin = this.getInfosService.data.idmedecin;
        console.log(this.idpatient);
        //this.approbation(this.menu.idpatient);

      
        if (this.menu.approbation == 'Nok') {

          this.medecinN = this.menu.medeciniNom+' '+this.menu.medeciniPrenom;
          this.specialite = this.menu.libelle;
          this.getSuivis(this.idPers);
          
        } else {
          
        }

             
  },
  (err)=>{
    console.log(err);
    //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
  });
}

urlSuivis;
urlApprouver;
param;


onStopSuivis(param: string, action:string, idmed:string){
    this.param = param;
    if(action !=' ' && idmed != ' '){
      this.idphm=action;
      this.idmedecin=idmed;
    }
    this.urlSuivis = this.urlService.stop+this.param+'?id='+this.idphm+'&idmedecin='+this.idmedecin+'&idpatient='+this.idpatient;
          this.http.post(this.urlSuivis, JSON.stringify(this.json))
              .subscribe(data=>{ 
                console.log(this.urlSuivis);
                if(data=="1")
                {
                  this.getJournal(this.idPers);
                }
      },
      (err)=>{
        console.log(err);
        //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
      });
    
      

}


menu1: any;
appUrlSuivis = this.urlService.approbation;
getSuivis(idpers: string){
  this.http.post(this.appUrlSuivis+idpers, JSON.stringify(this.json))
  .subscribe(data=>{ 
    console.log(data);
    this.menu1 = data;
  },
  (err)=>{
    console.log(err);
    //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
  });
}



  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications() {
    this.navCtrl.navigateForward('fluid');
  }

  goToEditProgile(){
    
    this.navCtrl.navig