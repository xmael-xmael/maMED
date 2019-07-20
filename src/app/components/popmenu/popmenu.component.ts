import { Component, OnInit } from '@angular/core';
import { NavController, Events, ModalController } from '@ionic/angular';
import { ImagePage } from '../../pages/modal/image/image.page';
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { GetInfosService } from '../../services/getInfos-service';

@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';

  constructor(public navCtrl: NavController,
              public events: Events, 
              public modalCtrl: ModalController,
              public getInfosService: GetInfosService) { }

  ngOnInit() {
  }
  data:string;
  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }
  goToEditProgile(){
    this.events.subscribe('nom', (data) =>{
      this.data = data;
      console.log(data); // 👋 Hello from page1!
    });
    this.navCtrl.navigateForward('edit-profile');
    
  }
  async presentImage(image: any) {
    //this.navCtrl.navigateRoot('/home-results/96');
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }
}
