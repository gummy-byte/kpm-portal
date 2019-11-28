import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.page.html',
  styleUrls: ['./user-switch.page.scss'],
})
export class UserSwitchPage implements OnInit {
  constructor(
  		public navCtrl: NavController
  	) { }

  exitApp(){
  	navigator['app'].exitApp();
  }
  
  ngOnInit() {
  }
}	
