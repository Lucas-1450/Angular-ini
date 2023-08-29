import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';

  cursoAngular: boolean = true;

  urlImagem = 'http://lorempixel.com.br/400/200';

  valorAtual: string = '';
  valorSalvo: string = '';

  

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }
  onKeyUp(evento: KeyboardEvent){
    console.log();  
    this.valorAtual = (<HTMLInputElement>evento.target).value;  
  }
  salvarValor(valor: KeyboardEvent){
    this.valorSalvo = (<HTMLInputElement>valor.target).value;
  }
  
  
  constructor(){ }

  ngOnInit(){

  }



}
