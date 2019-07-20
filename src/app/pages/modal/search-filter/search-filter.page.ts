import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GetInfosService } from '../../../services/getInfos-service';
import { UrlService } from '../../../services/url-service';
import { ImagePage } from '../../modal/image/image.page';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  vil:any;var;test='elle';
  newMesure={};

  constructor(private modalCtrl: ModalController,
              private navParams: NavParams,
              private http: HttpClient,
              private info: GetInfosService,
              private urlService: UrlService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getLibeleMesure();
    this.vil = this.navParams.data.data;
    console.log(this.vil);
    this.var =typeof this.vil;
    //console.log(this.var);
    if(this.var !=  'undefined') {
      this.test="nothing";
      
      console.log(this.test);
    }
  }

  closeModal() {
    this.modalCtrl.dismiss(); 
  }
  json={};
  libele: any;
  
  getLibeleMesure(){
    let urlGetLibele = this.urlService.getLibele;
    this.http.post(urlGetLibele, JSON.stringify(this.json))
    .subscribe(data=>{ 
      //console.log(this.data);
      this.libele = data;
    },
    (err)=>{
      console.log(err);
      //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
    });
  }
  data:{};
  onUpdateData(id:string){
    console.log(this.data);
    let editUrl=this.urlService.editMesure+id;
    //console.log(editUrl);
  this.http.post(editUrl, JSON.stringify(this.data))
    .subscribe(data=>{ 
      console.log('---------------------------------------------------');
      console.log(data);
      console.log(editUrl);
      console.log('------------------------Elle ma bien aimé---------------------------');
      console.log(this.data);
      console.log('---------------------------------------------------');
      if(data=='succes'){
        this.onAlert('Sucess', 'Mesure correctement editer');

      }
      else{
        this.onAlert('Echec', 'Nous sommes desoler queleque chose a mal tourné');
      }  
  },
  (err)=>{
    console.log(err);
    this.onAlert('Echec', 'Nous sommes desoler queleque chose a mal tourné');
  });
  }

  async onAlert(par: string, param:string){
    const alert = await this.alertCtrl.create({
      header: par,
      message: param,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.closeModal();
          }
        }
      ]
    });
    alert.present();
  }

  // async presentImage() {
  //   const modal = await this.modalCtrl.create({
  //     component: ImagePage
  //   });
  //   return await modal.present();
  // }

  onSaveMesure(){ 
    let urlNewMesure = this.urlService.newMesure+this.info.data.idpatient;
    this.http.post(urlNewMesure, JSON.stringify(this.newMesure))
    .subscribe(data=>{ 
      console.log(data);
        if(data=='succes'){
          this.onAlert('Sucess', 'Mesure correctement enregistrer');
        }
        
        this.onAlert('Echec', 'Nous sommes desoler queleque chose a mal tourné');
    },
    (err)=>{
      console.log(err);
      this.onAlert('Echec', 'Nous sommes desoler queleque chose a mal tourné');
    });

  }
  

}
