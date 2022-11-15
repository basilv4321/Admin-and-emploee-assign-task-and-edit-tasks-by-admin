import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToLogin(){
    this.router.navigateByUrl("/login")
  }

}
