import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {path:"adminhome",component:AdminhomeComponent,children:[
    {path:"welcome",component:NavigationComponent},
    {path:"register-employee",component:RegisteremployeeComponent},
    {path:"profile",component:AdminprofileComponent},
    {path:"employees",component:ListemployeeComponent},
    {path:"employeeTask",component:ViewTaskComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
