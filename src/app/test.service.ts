import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  // data: string;

  data = [{
    name: "prasanth",
    age: "21",
  }, {
    name: "SAI",
    age: "21",
  }]
  my = new Observable((data) => {
    let a = this.data
    data.next(a)
  })



  private mysubject = new Subject<string>()

  constructor(public http: HttpClient) { }

  sendmsg(msg: string) {
    this.mysubject.next(msg)
  }
  receivedmsg(): Observable<string> {
    return this.mysubject.asObservable()
  }
  getusers() {
    let users = JSON.parse(localStorage.getItem('test') || '[]')
    return users
  }
  createuser(user: any) {
    let data = JSON.parse(localStorage.getItem('test') || '[]')
    console.log(data)
    data.push(user)
    localStorage.setItem('test', JSON.stringify(data))
  }
  adduserdata(user1: any) {
    let data1 = JSON.parse(localStorage.getItem('allusersdata') || '[]')
    console.log(data1)
    data1.push(user1)
    localStorage.setItem('allusersdata', JSON.stringify(data1))
  }
  getuserdata() {
    let usersdata = JSON.parse(localStorage.getItem('allusersdata'))
    return usersdata
  }
}
