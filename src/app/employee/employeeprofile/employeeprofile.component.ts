import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {

  employee:any
  username:any=''
  password:any=''
  email:any

  constructor(private service:LoginService,private service1:UserdataService) { }

  ngOnInit(): void {
    this.employee=this.service.employeeDetails.find((n:any)=>
      n.username==this.service1.user
    )
  }

}
