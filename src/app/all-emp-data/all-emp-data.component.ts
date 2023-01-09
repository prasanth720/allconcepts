import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-all-emp-data',
  templateUrl: './all-emp-data.component.html',
  styleUrls: ['./all-emp-data.component.css']
})
export class AllEmpDataComponent implements OnInit {
  form1: any;
  alldata: any;
  logeduser: string;
 odd:any=[];
 even:any=[];
  constructor(public fb: FormBuilder,public service:TestService , public router:Router) {
    this.form1 = this.fb.group({
      Firstname: [''],
      Lastname: [''],
      empid: [''],
      phonennumber: [''],
      address: [''],
      department: [''],
      doj:[''],
      country: ['']
    })
    // this.service.mysubject.subscribe(data=>
    //   {
    //     console.log(data)
    //   })
  }

  ngOnInit(): void {
    this.getalldata()
    this.obser()
    this.subject()

// this.service.mysubject.subscribe((data)=>
//   {
    
//     console.log(data )
//     this.logeduser=data

//     console.log(this.logeduser)
//   })
//   console.log(this.logeduser)

//     console.log(this.logeduser)

this.service.receivedmsg().subscribe((d:string)=>
{
this.logeduser=d
console.log(this.logeduser)
})
  
  }
// console.log(logeduser)

  submit()
  {
    if(this.form1.valid)
    {
      this.adduser()
      console.log(this.form1.value)
    }else{
      alert("must fill all details")
    }
    console.log(this.form1.value)
    this.ngOnInit()
  }
  adduser() {
    let data = {
      Firstname: this.form1.value.Firstname,
      Lastname: this.form1.value.Lastname,
      empid: this.form1.value.empid,
      phonennumber: this.form1.value.phonennumber,
      address: this.form1.value.address,
      department: this.form1.value.department,
      doj:this.form1.value.doj,
      country: this.form1.value.country
    }
    // console.log(data)  
    this.service.adduserdata(data)
  }
getalldata()
{
  this.alldata=this.service.getuserdata()
}
logout()
{
  this.router.navigate(['/body'])
}

obser()
{
  this.service.my.subscribe((x)=>
  {
    console.log(x)
  })
}
subject()
{
  
  this.service.receivedmsg().subscribe(data=>
    {
      console.log(data)
    })
}



}
