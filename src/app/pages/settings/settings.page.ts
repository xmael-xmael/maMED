import { Component, OnInit } from '@angular/core';
import { NavController, AlertController  } from '@ionic/angular';
import { UrlService } from '../../services/url-service';
import { GetInfosService } from '../../services/getInfos-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  lang: any;
  enableNotifications: any;
  paymentMethod: any;
  currency: any;
  enablePromo: any;
  enableHistory: any;

  languages: any = ['English', 'Portuguese', 'French'];
  paymentMethods: any = ['Paypal', 'Credit Card'];
  currencies: any = ['USD', 'BRL', 'EUR'];

  constructor( public navCtrl: NavController,
               public urlService: UrlService,
               public info: GetInfosService,
               public http: HttpClient,
               private alertController: AlertController) { }

  ngOnInit() {
  }

  urlPicture = this.urlService.picture+this.info.data.chemin;
  name = this.info.data.prenom+' '+this.info.data.nom;
  email = this.info.data.email;
  editProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Nouveau mot de passe',
      inputs: [
        {
          name: 'ancien',
          type: 'text',
          placeholder: 'Ancien mot de passe'
        },
        {
          name: 'nouveau',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Nouveau mot de passe'
        },
        {
          name: 'repeat',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Entrez encore'
        },
        // input date with min & max
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
