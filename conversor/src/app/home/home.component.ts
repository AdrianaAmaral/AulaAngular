import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 //public listadeMoedas:object = {}
 //public listadeMoedas1:any;

  public resultadoConvercao = "00"
  public moeda1:any;
  public moeda2: any;
  public lista = new Array();


  constructor(public api:ApiService,  private router: Router) { }

  ngOnInit(): void {
    this.listarTodasMoedas()
  }

listarTodasMoedas(){
  this.api.buscarMoedas().subscribe(res =>{
    console.log(res,"minhas moedas")

    this.lista.push(res.ARS)
    this.lista.push(res.USD)
    this.lista.push(res.BTC)
    this.lista.push(res.CAD)
    this.lista.push(res.CHF)
    this.lista.push(res.CNY)
    this.lista.push(res.DOGE)
    this.lista.push(res.ETH)
    this.lista.push(res.EUR)
    this.lista.push(res.GBP)
   
  })
}

fazerConversao(){
let conta = (this.moeda1*this.moeda2).toFixed(2);
this.resultadoConvercao = conta.toString().replace('.', ',')
console.log(this.resultadoConvercao)
}

sair() {
  this.router.navigate(['/'])
}
}


