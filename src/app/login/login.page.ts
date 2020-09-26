import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public storage: Storage,
    public router: Router
  ) { }

  ngOnInit() {
  }
  
  user = {
    matric_number: '',
    identification_number: '',
    type: 'student'
  }
  error = {
    exist: false,
    message: null
  }
  
  validateForm(){
    const id = /^\D{3}\d{4}-\d{3}$/
    const ic = /^\d{12}$/
    console.log(this.user)
    console.log(id.test(this.user.matric_number),this.user.matric_number)
    if (id.test(this.user.matric_number) && ic.test(this.user.identification_number)){
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
