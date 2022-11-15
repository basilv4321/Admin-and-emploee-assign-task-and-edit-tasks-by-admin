import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent implements OnInit {

  employRegisterForm!:FormGroup
  registeredEmployees:any=[]
  mySubscription:Subscription | undefined;
  editBoolean:boolean=false
  employIndex:any
  
  constructor(private _fb:FormBuilder,private service:LoginService,private service1:UserdataService,private _router:Router) { }

  ngOnInit(): void {
    this.getEmployees()
    this.employRegisterForm=this._fb.group({
      username:["",[Validators.required,Validators.maxLength(20),Validators.minLength(1)]],
      password:["",[Validators.required,Validators.maxLength(20),Validators.minLength(1)]],
      email:["",[Validators.required,Validators.email]]
    })
  }

  registerNewEmploy(){
    if(this.employRegisterForm.invalid){
      alert("invalid form")
    }
    else if(this.editBoolean===true && this.employRegisterForm.valid){
      this.service.employeeDetails.splice(this.employIndex,1,this.employRegisterForm.value)
      this.service.toLocalStorage()
      this.getEmployees()
    }
    else if(this.editBoolean===false && this.employRegisterForm.valid){
      this.service.addEmploy(this.employRegisterForm.value)
      this.SubscriptionFn()
    }
    this.employRegisterForm.reset()
    this.editBoolean=false
  }

  SubscriptionFn(){
    this.mySubscription=this.service.subject$.subscribe({
      next: (val)=>{
        this.registeredEmployees.push(val)
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  getEmployees(){
    this.registeredEmployees=this.service.employeeDetails
  }

  delete(employee:any){
    this.service.deleteEmployee(employee)
    this.getEmployees()
  }

  edit(employee:any){
    let editEmployee=this.service.employeeDetails[employee]
    this.employIndex=employee
    this.employRegisterForm.setValue(editEmployee)
    this.editBoolean=true
    }
  submitEdit(){
    
  }
  ngOnDestroy(){
    this.mySubscription?.unsubscribe()
  }
  
  viewTasks(username:any){
    this.service1.usernameForTaskView=username;
    this._router.navigateByUrl("/adminhome/employeeTask")
  }

  


}
