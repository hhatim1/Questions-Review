import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LoginService {
  questionArray: any

  constructor(private _http: HttpClient) {
    this.questionArray = []
  }

 
  login(user, cb) {
 
    this._http.post('/loginUser', user).subscribe((res) => {
      cb(res)
    })
  }
  checkSession(cb) {
  
    this._http.get('/checkSession').subscribe((res) => {
     
      cb(res)
    })
  }
  new(user, cb) {
    this._http.get('/new', user).subscribe((res) => {
  
      cb(res)
    })
  }

  answerIT(user, cb) {
    this._http.get('/answerIT', user).subscribe((res) => {
   
      cb(res)
    })
  }

  addDescrip(question, cb) {
    this._http.post('/addDescrip', question).subscribe((res) => {
      cb(res)
    })
  }

  addAnswer(question, cb) {
    this._http.post('/addAnswer', question).subscribe((res) => {
      cb(res)
    })
  }

  findAll(cb) {
    this._http.get("/findAll").subscribe((res) => {
      this.questionArray = res
      cb()
    })
  }

  delete(id, cb) {
    this._http.delete('/delete/' + id).subscribe((res) => {
      cb(res)
    })
  }

  findOneQuestion(id, cb) {
    this._http.get("/get/" + id).subscribe((res) => {
      cb(res)
    })
  }

  findOneAnswer(id, cb) {
    this._http.get("/get2/" + id).subscribe((res) => {
      cb(res)
    })
  }

  like(id, cb) {
    this._http.get('/like/' + id).subscribe((res) => {
      console.log("im here", res)
      cb(res)
    })
  }

 
}
