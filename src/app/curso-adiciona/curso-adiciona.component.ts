import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-curso-adiciona',
  templateUrl: './curso-adiciona.component.html',
  styleUrls: ['./curso-adiciona.component.css']
})
export class CursoAdicionaComponent{

@Output() adicionarCurso = new EventEmitter();

valor = 5;

adicionar(curso){
  const cursos = {
    nome: curso
  };
  this.adicionarCurso.emit(cursos);

  this.valor = this.valor + 1;
}

obterClassesValor(){
  return{
    'num-par': this.valor%2 == 0,
    'num-impar': this.valor%2 == 1,
  }

}
}
