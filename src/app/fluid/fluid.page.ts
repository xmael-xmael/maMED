/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component, OnInit, } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { AlertController, Platform,} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../services/url-service';
import { GetInfosService } from '../services/getInfos-service';

@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.page.html',
  styleUrls: ['./fluid.page.scss'],
})
export class FluidPage implements OnInit {
 
  conversation = [
  ]
  phone_model = 'iPhone';
  input = '';

  constructor(  private platform: Platform,
                public alertController: AlertController, 
                private device: Device, 
                private menuCtrl: MenuController, 
                private http: HttpClient,
                private urlService: UrlService,
                private info:GetInfosService,
                private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end'); 
    this.onGetMessage();
     
  }

  urlImage = this.urlService.picture+this.info.data.chemin;
  idPers = this.info.data.idpatient;
  json = {
    idpers: this.idPers,
  }

  menu1;
  search:string;
  appUrlMessage = this.urlService.message;
  uri = this.appUrlMessage+this.idPers+'&q='+this.search;
  onGetMessage(){  
    this.http.post(this.uri, JSON.stringify(this.json))
    .subscribe(data=>{ 
      console.log(data);
      this.menu1 = data;
      setTimeout(() => {
        this.scrollToBottom()
      }, 10);
    },
    (err)=>{
      console.log(err);
      //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
    });
  }

  async presentAlert() {
    if (this.device.platform = 'iOS') {
      switch (this.platform.height()) {
        case 812:
          this.phone_model = 'iPhone X';
          break; 
        case 736:
          this.phone_model = 'iPhone 6/7/8 Plus';
          break;
        case 667:
          this.phone_model = 'iPhone 6/7/8';
          break;
      }

      const alert = await this.alertController.create({
        header: 'Hey there',
        subHeader: 'Information',
        message: 'We have adjusted the layout as per the phone model - ' + this.phone_model,
        buttons: ['OK']
      });

      await alert.present();
    }
  }

    new={
      input:''
    };
  send() {
    let any:any=this.new;
    if (this.new.input != '') {
      if(this.info.data.approbation=="00" || this.info.data.approbation == 'Nok' )
      {
        this.onAlert('Erreur de contexte', 'Vous devez etre suivis pour envoyer un nouveau message');
      }
      else
      {
        let urlGetNewMessage = this.urlService.getNewMessage+this.info.data.idpatient+'&idM='+this.info.data.idmedecin;
        console.log(this.new);
        this.http.post(urlGetNewMessage, JSON.stringify(this.new))
          .subscribe(data=>{ 
            //this.onGetMessage();
            this.menu1.push({ message: this.new.input, expediteur:'0', image: 'assets/images/sg1.jpg' });
            this.input = '';
            setTimeout(() => {
              this.scrollToBottom()
            }, 5);
          },
          (err)=>{
            console.log(err);
            //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
          });
        
        setTimeout(() => {
          this.scrollToBottom()
        }, 10)
      }
    }
    else{
      this.onAlert('Waooooh', 'Vous ne pouvez pas envoyer un message vide');
    }
  }

  scrollToBottom(){
    let content = document.getElementById("chat-container");
    let parent = document.getElementById("chat-parent");
    let scrollOptions = {
      left: 0,
      top: content.offsetHeight
    }
    
    parent.scrollTo(scrollOptions)
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
          }
        }
      ]
    });
    alert.present();
  }


}
