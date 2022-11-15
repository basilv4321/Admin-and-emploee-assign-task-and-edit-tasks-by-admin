import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { ViewTaskComponent } from './view-task/view-task.component';


@NgModule({
  declarations: [
    RegisteremployeeComponent,
    AdminhomeComponent,
    AdminprofileComponent,
    NavigationComponent,
    ListemployeeComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    LoginService
  ]
})
export class AdminModule { }
