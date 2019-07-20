import { Component } from '@angular/core';

import { Platform, NavController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import { GetInfosService } from './services/getInfos-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string; picture: string;  status: string;

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public events: Events,
    public info: GetInfosService
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: 'home-results/'+this.info.data.idpersonne,
        direct: 'root',
        icon: 'home'
      },
      
      {
        title: 'Prefernces',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      },
      {
        title: 'A propos',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },

    ];

    this.events.subscribe('nom', (data) =>{
      this.name = data;
      //console.log(data); // 👋 Hello from page1!
    });
    this.events.subscribe('picture', (data) =>{
      this.picture = data;
      //console.log(data); // 👋 Hello from page1!
    });
    this.events.subscribe('status', (data) =>{
      this.status = data;
      //console.log(data); // 👋 Hello from page1!
    });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
