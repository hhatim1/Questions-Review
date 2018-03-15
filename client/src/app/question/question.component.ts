import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  user: object;
  question: object;
  questionArray: Array<any>;
  answer: object;
  answerArray: Array<any>;


  constructor(private _router: Router, private _loginService: LoginService) {
    this.user = { name: null }
    this.question = { name: '' }
    this.questionArray = []
    this.answer = { name: '' }
    this.answerArray = []
  }
  addDescrip() {
    this._loginService.addDescrip(this.question, (res) => {
    
      this.questionArray.push(res)
      this.question = { content: null }
      this._router.navigate(['/dashboard'])

    })
  }
  ngOnInit() {
  }
}
