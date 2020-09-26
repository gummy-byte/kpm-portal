import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  constructor(
    public storage: Storage,
    public router: Router
  ) { }
  
  user = {}
  
  ngOnInit() {
    this.storage.get('user').then((val)=>{
      this.user = val
    })
  }

  updateProfile() {
    this.storage.set('user',this.user).then((val) => {
      this.router.navigate(['/profile'])
    })
  }
  
}
