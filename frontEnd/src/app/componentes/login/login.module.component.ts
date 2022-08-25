import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service.component';
import { FormsModule } from '@angular/forms'; 
import { routing } from 'src/app/app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent
    ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FocusEvent,
    FormsModule,
    routing,
    AuthService,
    HttpClientModule
  ]
})
export class LoginModule { }
