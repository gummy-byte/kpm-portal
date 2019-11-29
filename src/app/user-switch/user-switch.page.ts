import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController, Events } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.page.html',
  styleUrls: ['./user-switch.page.scss'],
})
export class UserSwitchPage implements OnInit {

  constructor(
  		public navCtrl: NavController,
  		public platform: Platform,
  		public alertCtrl: AlertController
  	) 
  {}

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
						navigator['app'].exitApp();
            console.log('Confirm');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
}	
