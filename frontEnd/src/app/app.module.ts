import { PhotosModule } from './photos/photos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ContatosComponent } from './contatos/contatos.component';
import { AuthService } from './componentes/auth.service.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
