import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: object
  questionArray: Array<any>;
  answerArray: Array<any>;

  constructor(private _router: Router, private _loginService: LoginService) {
    this.user = { name: null }
    this.questionArray = []
   
    this.answerArray = []
  }

  ngOnInit() {
    this.checkSession()
    this.findAllDescrips()
    
  }

  checkSession() {
    this._loginService.checkSession((res) => {
      this.user = res;
      if (!res) {
        this._router.navigate(['/'])
      }
    })
  }

  new() {
    this._loginService.new(this.user, (res) => {
      if (res == "new poll") {
        this._router.navigate['question']
      }

    })
  }

  findAllDescrips() {
    this._loginService.findAll((res) => {
      this.questionArray = this._loginService.questionArray;
   
    })
  }


  delete(id) {
    this._loginService.delete(id, (res) => {
  
    })
  }

  findOneQuestion() {
    this._router.navigate(['answer'])
  }
}
