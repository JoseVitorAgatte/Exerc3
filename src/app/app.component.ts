import { Component, Input} from '@angular/core';

import {TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exercicio1';

  valor = 5;

  @Input() cursos=[
    {nome: 'Análise e Desenvolvimento de Sistemas'},
    {nome: 'Eventos'},
    {nome: 'Gestão Comercial'},
    {nome: 'Recursos Humanos'},
    {nome: 'Gestão Empresarial - EAD'},
  ];

  onAdicionarCurso(curso){
    this.cursos = [curso, ...this.cursos];

    this.valor = this.valor + 1;
  }

  obterEstilos(){

    return{
      color: '#28A745',
      font: '28%' ,
      weight: 'bold'
    }
  }

  obterClasseValor(){
    return{
      'num-par': this.valor%2 == 0,
      'num-impar': this.valor%2 == 1,
    }

  }

  obterCorFonte(){
    return{

      'num-par-font': this.valor%2 == 0,
      'num-impar-font': this.valor%2 == 1,
    }
  }
}

