import { Component, Input} from '@angular/core';

import {TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exercicio1';

  @Input() cursos=[
    {nome: 'Análise e Desenvolvimento de Sistemas'},
    {nome: 'Eventos'},
    {nome: 'Gestão Comercial'},
    {nome: 'Recursos Humanos'},
    {nome: 'Gestão Empresarial - EAD'},
];

  onAdicionarCurso(curso){
    this.cursos = [curso, ...this.cursos];
  }
}
