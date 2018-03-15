import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-answer-it',
  templateUrl: './answer-it.component.html',
  styleUrls: ['./answer-it.component.css']
})
export class AnswerItComponent implements OnInit {
  question: object;
  id: any;
  sub: any;

  user: object;
  answer: object;
  answerArray: Array<any>;

  constructor() {
    
   }

  ngOnInit() {
    
  }

  

}


