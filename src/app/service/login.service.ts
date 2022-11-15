import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { 
    this.toEmployeeDetails()
    this.subject$.next(this.employeeDetails)
  }

  subject$=new Subject();


  adminDetails:any={
    username:"admin",
    password:"admin"
  }
  
  employeeDetails:any=[
    // {
    //   username:"jain",password:"123",email:"jain@gmail.com"
    // }
  ]

  addEmploy(employRegisterForm:any){

    let userExist=this.employeeDetails.some((i:any)=>
    i.username===employRegisterForm.username
    )
    if(userExist){
      alert("this user already exist")
    }
    else{
      this.employeeDetails.push(
      employRegisterForm
      )
      this.toLocalStorage()
      alert("employ added")
    }
    
  }

  toLocalStorage(){
    localStorage.setItem("employeeTable",JSON.stringify(this.employeeDetails))
  }

  toEmployeeDetails(){
    if(localStorage.getItem('employeeTable')){
      let data1:any=localStorage.getItem("employeeTable")
      let data=JSON.parse(data1)
      data.map((n:any)=>{
        this.employeeDetails.push(n)
        this.subject$.next(n)
      })
    }
  }

  deleteEmployee(i:any){
      this.employeeDetails.splice(i,1)
      this.toLocalStorage()
  }



}
