import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path:"login",component:LoginComponent}
  // {path:"userhome/welcome",component:EmployeehomeComponent}
  // {path:"adminhome",component:AdminhomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
