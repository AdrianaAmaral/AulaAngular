import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroupName, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
public email:any;
public senha:any;

public mostrarCadastro = false;
public mostrarConversor = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  liberarCadastro() {
    this.mostrarCadastro = !this.mostrarCadastro
    this.router.navigate(['/cadastro'])
  }

  fazerLogin() {
    this.authService.loginWithEmail(this.email,this.senha)
    if (this.mostrarConversor = !this.mostrarConversor) {
    this.router.navigate(['/'])
    }else{
      this.router.navigate(['/home']) 
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastro'])
  }
 
}
