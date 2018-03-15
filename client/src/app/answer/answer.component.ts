import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  question: object;
  id: any;
  sub: any;

  user: object;
  answer: object;
  answerArray: Array<any>;

  constructor(private _loginService: LoginService, private _router: Router, private _route: ActivatedRoute) {
    this.user = { name: null }
    this.answer = { name: '' }
    this.answerArray = []

  }
  
  addAnswer() {
    this._loginService.addAnswer(this.question, (res) => {

      this.answerArray.push(res)
      this.answer = { content: null }
      this._router.navigate(['/answer'])    

    })
  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id']
    })
    this.getOneQuestion(this.id)
  }

  getOneQuestion(id) {
    this._loginService.findOneQuestion(id, (res) => {    
      this.question = res
    })
  }

  getOneAnswer(id) {
    this._loginService.findOneAnswer(id, (res) => {
      
      this.question = res
    })
  }
  like(id) {
    this._loginService.like(id, (res) => {
      
      console.log(res)
    })
  }

  answerIT() {
    this._loginService.answerIT(this.user, (res) => {
      if (res == "new answer") {
        this._router.navigate['answer']
      }

    })
  }
}