import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm!:FormGroup;
  mycaptcha:any=["abc12","123gt","qw21","mhgf1","ert23"]
  captcha:any
  no:number=0
  captchaValid:boolean=false

  constructor(private fb:FormBuilder,private service:LoginService,private router:Router,private service1:UserdataService) { }

  ngOnInit(): void {
    this.get()
    this.loginForm=this.fb.group({
      username:["",[Validators.required,Validators.minLength(1),Validators.maxLength(20)]],
      password:["",[Validators.required,Validators.minLength(1),Validators.maxLength(20)]],
      captcha:["",Validators.required]
    })
  }

  get(){
    this.captcha=this.mycaptcha[this.no]
  }

  login(){
    if(this.loginForm.invalid){
      alert("invalid form")
    }
    else if(this.loginForm.valid && this.loginForm.value.captcha==this.captcha){
      if(this.loginForm.value.username==this.service.adminDetails.username && this.loginForm.value.password==this.service.adminDetails.password){
      
        alert("welcome admin")
        this.service1.adminLogined=true
        this.router.navigateByUrl("/adminhome/welcome")
      }
      else{
        if(this.service.employeeDetails.some((n:any)=>
          n.username==this.loginForm.value.username && n.password==this.loginForm.value.password
        )){
          this.service1.user=this.loginForm.value.username
          // console.log(this.service.user);
          
          // console.log(this.loginForm.value);
          
          // localStorage.setItem("user",this.loginForm.value.username)
          // this.service1.usernameForTaskView=this.loginForm.value.username;
          alert("login successful")
          this.router.navigateByUrl("/userhome/welcome")
        }
        else{
          alert("user not exist")
        }
        
      }
      // this.router.navigateByUrl("/home")
    }
    else{
      alert("invalid captche")
      this.no=this.no+1
      this.get()
    }
  }
  navigateToRegister(){
    // this.router.navigateByUrl("/register")
  }



}
