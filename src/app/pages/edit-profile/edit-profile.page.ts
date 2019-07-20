import { Component, OnInit } from '@angular/core';
import { GetInfosService } from '../../services/getInfos-service';
import { UrlService } from '../../services/url-service';
import { NavController, LoadingController, ToastController, Events } from '@ionic/angular';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  menu: any;
  picture:string;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public events: Events,
    public infos: GetInfosService,
    public urlService: UrlService
    ) {  }
    ionViewWillEnter() {
      
  
    }

   
  

  ngOnInit() {
    
    this.menu = this.infos.data;
    this.picture = this.urlService.picture+this.menu.chemin;
    
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  }

}
