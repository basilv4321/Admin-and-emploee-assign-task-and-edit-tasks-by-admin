import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToLogin(){
    this.router.navigateByUrl('/login')
  }
  navigateToEmployeeTasks(){
    this.router.navigateByUrl('/adminhome/employees')
  }
  navigateToRegister(){
    this.router.navigateByUrl("/adminhome/register-employee")
  }
}
