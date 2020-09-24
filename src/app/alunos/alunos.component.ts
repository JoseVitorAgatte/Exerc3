import { Component, Input} from '@angular/core';

import {Aluno }from '../model/aluno'


@Component({
  selector: 'alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent{
  @Input() cursos;
  aluno: Aluno = new Aluno;
  salvar(alunoForm){
    const nome = alunoForm.value.nome;
    const idade = alunoForm.value.idade;
    const email = alunoForm.value.email;
    const curso = alunoForm.value.curso;

    console.log(`Nome: $(nome), Idade: $(idade), Email: $(email), Curso: $(curso)`);
  }


}
