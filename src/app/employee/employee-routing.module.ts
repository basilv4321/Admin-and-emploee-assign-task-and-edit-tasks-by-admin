import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"userhome",component:EmployeehomeComponent,children:[
    {path:"profile",component:EmployeeprofileComponent},
    {path:"addclient",component:RegisterclientComponent},
    {path:"welcome",component:WelcomeComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
