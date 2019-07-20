import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { UrlService } from '../../../services/url-service';
import { HttpClient } from '@angular/common/http';
import { GetInfosService } from '../../../services/getInfos-service';
import { SearchFilterPage } from '../search-filter/search-filter.page';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  @Input() value: any;
  public image: any;
  search: string="";
  menu;

  constructor(
    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private urlService: UrlService,
    private http: HttpClient,
    private getInfosService: GetInfosService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle(this.value);
    this.getMesure();
  
    

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  json = {
    idpers: this.getInfosService.data.idpatient,
  }
  data:{};


  mesureUrl = this.urlService.mesure;
  uri;// = this.mesureUrl+this.getInfosService.data.idpatient+'&q='+this.search;
  idMesure;

  getMesure(){
    this.uri = this.mesureUrl+this.getInfosService.data.idpatient+'&q='+this.search;
    this.http.post(this.uri, JSON.stringify(this.json))
    .subscribe(data=>{ 
      console.log(this.search);
      console.log(data);
      this.menu = data;
      //this.idMesure = this.menu.idjournal;    
  },
  (err)=>{
    console.log(err);
    //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
  });
}

onDelete(id:string){
  let onDeleteMesureUrl=this.urlService.deleteMesure+id;
  this.http.post(onDeleteMesureUrl, JSON.stringify(this.json))
    .subscribe(data=>{ 
      console.log(data);
      if(data=='succes'){
        this.getMesure();
        this.onAlert('Sucess', 'Mesure correctement effacer');
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
    buttons: ['Dismiss']
  });
  alert.present();
}

onEdit(id:string){
  let editUrl=this.urlService.editMesure+id;
  this.http.post(editUrl, JSON.stringify(this.data))
    .subscribe(data=>{ 
      console.log(data);
      if(data=='succes'){
        this.getMesure();
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

async searchFilter (id:any) {
  const modal = await this.modalCtrl.create({
    component: SearchFilterPage,
    componentProps:{
      'data': id
    }
  });
  return await modal.present();
}




}
