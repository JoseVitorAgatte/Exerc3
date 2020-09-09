import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-curso-adiciona',
  templateUrl: './curso-adiciona.component.html',
  styleUrls: ['./curso-adiciona.component.css']
})
export class CursoAdicionaComponent{

@Output() adicionarCurso = new EventEmitter();

adicionar(curso){
  const cursos = {
    nome: curso
  };
  this.adicionarCurso.emit(cursos);
}

}
