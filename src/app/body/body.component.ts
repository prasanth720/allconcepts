import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  data: any = [];
  form: any;
  signupform: FormGroup;
  submitdate: any;

  constructor(public service: TestService, public fb: FormBuilder, public route: Router) {
    this.form = this.fb.group({
      eid: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[0-9]*$/)]],
      username: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]*$/)]],
      password: ['', [Validators.required]],
      Team: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]*$/)]],
      phonenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dob:['',]
    })
    this.signupform = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]*$/)]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getdata()

    // setInterval(()=>{
    //   this.service.mysubject.subscribe((x:any)=>{
    //     this.submitdate=x
    //   })
    // },1000)
  }
  getdata() {
    this.data = this.service.getusers()
    console.log(this.data)
  }
  submit() {
    if (this.form.valid) {
      this.adduser()
    } else {
      this.form.markAllAsTouched();
    }

  }
  adduser() {
    let data = {
      eid: this.form.value.eid,
      username: this.form.value.username,
      password: this.form.value.password,
      Team: this.form.value.Team,
      phonenumber: this.form.value.phonenumber,
      dob:this.form.value.dob
    }
    console.log(data);
    this.service.createuser(data);
    alert("Account Created Succesfully")
    // this.route.navigate(['/table'])
  }
  signup() {
    console.log(this.signupform.value)
    if (this.signupform.valid) {
      this.data.forEach(element => {
        if (element.username == this.signupform.value.username && element.password == this.signupform.value.password) {
          console.log(element.username)
          this.service.sendmsg(element.username)
          this.route.navigateByUrl('/layout/alled')
        }
      });
    } else {
      this.signupform.markAllAsTouched();
    }

    this.signupform.reset()
  }

}

