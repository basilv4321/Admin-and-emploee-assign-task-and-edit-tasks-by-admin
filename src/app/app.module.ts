import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { LoginModule } from './login/login.module';
import { LoginService } from './service/login.service';
import { UserdataService } from './service/userdata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    EmployeeModule,
    LoginModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
