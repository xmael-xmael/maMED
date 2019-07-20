import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavController, MenuController, 
  ToastController, AlertController, LoadingController, Events } from '@ionic/angular';

//services
import { UrlService } from '../../services/url-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  logins = {
    email:'',
    pass:''
  };
  status: string;
  donnee: string;
  view: string;
  menus: any;
  catrine: string;
  page: string;
  var: string;
  errs: string = '';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private urlService: UrlService,
    public events: Events,
    ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    //console.log(this.logins);
    
  }

  urlLogin =this.urlService.login; 
  idPers:string;


  goToHome() {
    console.log(this.logins);
    this.http.post(this.urlLogin, JSON.stringify(this.logins))
      .subscribe(data => {
        console.log(data);
        this.menus = data;
        this.idPers = this.menus.idpersonne;
        if (this.menus.error == 'false') {          
          this.catrine = 'clara';
          if(this.menus.role =='Patient') {

            // console.log(typeof(this.menus.idpersonne));

            this.events.publish('patient:login');
            this.events.publish('email', this.menus.email);
            this.navCtrl.navigateRoot('/home-results/'+this.idPers);

          }

         }
        else {
          this.catrine = 'Entrez les information valide ou creer un compte.';
          this.errs = '';
        }
      },
        (err) => {
          console.log(err);
          this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
        });


    //this.navCtrl.navigateRoot('/home-results');
  }



  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
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
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  

}
