import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';

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
    public alertCtrl: AlertController
    ) {}

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

  ionViewWillEnter()
  {
      this.subscription=this.platform.backButton.subscribe(_=>{
          this.presentAlertConfirm();
      })
  }

  ionViewWillLeave()
  {
      this.subscription.unsubscribe();
  }

  ngOnInit() {
  }
}