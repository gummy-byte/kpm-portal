import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public storage: Storage,
    public router: Router
  ) { }

  user = {
    type: null
  }
  finishLoad = false
  
  ngOnInit() {
    this.storage.get('user').then((value) => {
      this.user = value
      this.finishLoad = true
    })
  }

  navigateHome(){
   if (this.user.type == 'student'){
    this.router.navigate(['/student-home'])
  }else if(this.user.type == 'staff'){
    this.router.navigate(['/staff-home'])
   }
  }

}
