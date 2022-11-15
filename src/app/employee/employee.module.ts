import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    EmployeehomeComponent,
    RegisterclientComponent,
    EmployeeprofileComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatRadioModule
  ],
  providers: [
    
  ]
})
export class EmployeeModule { }
