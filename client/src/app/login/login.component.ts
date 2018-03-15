import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object

  constructor(private _loginService: LoginService, private _router: Router) {
    this.user = { name: '' }

  }

  login() {
   
    this._loginService.login(this.user, (res) => {
      if (res == 'success') {
      
        this._router.navigate(['dashboard']) 
      }
    })
  }


  checkSession(cb) {
    this._loginService.checkSession(cb)
  }

  ngOnInit() {
  }

}
