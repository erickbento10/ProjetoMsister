import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthService } from './componentes/auth.service.component';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
          
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
   HttpClientModule

  ],
  providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
