import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login/login.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  profileForm!:FormGroup
  constructor(private _fb:FormBuilder,private service:LoginService,private router:Router) { }
  username:any


  ngOnInit(): void {
    this.username=this.service.adminDetails.username
    this.profileForm=this._fb.group({
      password:["",[Validators.required,Validators.minLength(1),Validators.maxLength(20)]]
    })
  }
  change(){
    if(this.profileForm.valid){
      this.service.adminDetails.password=this.profileForm.value.password
      alert("password changed successfull")
      this.router.navigateByUrl('/login')
    }
    else{
      alert("invalid form")
    }
  }

}
