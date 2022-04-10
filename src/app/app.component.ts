import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;

  resultado:string = "";

  constructor(){
    this.devolverDado();
    this.resultadoLanzamiento();
  }

  lanzar(){
    return Math.floor(Math.random()* 6) + 1 ;
  }

  devolverDado(){
    this.valor1 = this.lanzar();
    this.valor2 = this.lanzar();
    this.valor3 = this.lanzar();
  }

  resultadoLanzamiento() {
    this.resultado = "Felicidades!"
  
  
  }
}