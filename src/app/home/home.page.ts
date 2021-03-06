import { Component } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
	
	options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only
  };

	constructor(
    private theInAppBrowser: InAppBrowser,
    public navCtrl: NavController,
    public platform: Platform,
		public alertCtrl: AlertController,
		private bar: StatusBar
		) {}

	public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
	}
	public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
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
}
