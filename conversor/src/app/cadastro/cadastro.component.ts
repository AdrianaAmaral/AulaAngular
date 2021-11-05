import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    email :new FormControl('', Validators.compose([Validators.required, Validators.email])),
    data : new FormControl(''), 
    senha: new FormControl('',Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(8)])),
  })
 

  constructor( private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }

  verificarData() {
    let dataAtual = new Date()
    console.log(dataAtual)
  }


  cadastrar(){
  console.log(this.formCadastro.get('senha')?.invalid)
  console.log(this.formCadastro, "meu formulario")
  /* this.ApiService.showMessage('Cadastrado com Sucesso!') */

  } 
  
  voltarLogin(): void{
  this.router.navigate(['/'])
  }
}
