import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  registeredEmployees:any=[]
  employeeList:any=[]
  employeeTasks:any=[]
  constructor(private service:LoginService,private service1:UserdataService,private _router:Router) { }

  ngOnInit(): void {
    this.employeeList=this.service.employeeDetails
  }

  delete(i:any){

  }
  edit(i:any){
    
  }
  viewTasks(username:any){
    this.service1.usernameForTaskView=username;
    this._router.navigateByUrl("/adminhome/employeeTask")
  }
  
  
}
