import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.page.html',
  styleUrls: ['./user-switch.page.scss'],
})
export class UserSwitchPage implements OnInit {

  subscription: any;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public storage: Storage,
    public router: Router
    ) {
      
    }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Do you really want to exit this app',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            // tslint:disable-next-line: no-string-literal
            navigator['app'].exitApp();
            console.log('Confirm');
          }
        }
      ]
    });

    await alert.present();
  }
  user = {
    type: null
  }
  finishLoad = false

  ionViewWillEnter() {
    this.subscription=this.platform.backButton.subscribe(_=>{
      this.presentAlertConfirm();
    })
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.storage.get('user').then((val) => {
      this.user = val
      if (this.user == null || this.user.type == null) {
        console.log('not logged in')
      } else if (this.user.type == 'student' || this.user.type == 'staff') {
        this.router.navigate(['/profile']);
      }
      this.finishLoad = true
    })
  }
}