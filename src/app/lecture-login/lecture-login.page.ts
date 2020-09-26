import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecture-login',
  templateUrl: './lecture-login.page.html',
  styleUrls: ['./lecture-login.page.scss'],
})
export class LectureLoginPage implements OnInit {

  constructor(
    public storage: Storage,
    public router: Router
  ) { }

  ngOnInit() {
  }
  
  user = {
    slip_gaji: '',
    type: 'staff'
  }
  error = {
    exist: false,
    message: null
  }
  
  validateForm(){
    const slip_gaji = /^\d{6}$/
    if (slip_gaji.test(this.user.slip_gaji)){
      // save data and navigate through
      this.error.exist = false
      this.error.message = null
      this.storage.set('user',this.user).then((value) => {
        this.router.navigate(['/profile'])
      })
    }else{
      this.error.exist = true
      this.error.message = 'Sila periksa semula identiti anda'
    }
  }
}
