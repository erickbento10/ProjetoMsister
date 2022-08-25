import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service.component';
import { Usuario } from './usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private usuario: Usuario = new Usuario();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  fazerLogin(): void {
  // console.log("Debuggin Angular Application",this.usuario);
  this.authService.fazerLogin(this.usuario);
  }
}
