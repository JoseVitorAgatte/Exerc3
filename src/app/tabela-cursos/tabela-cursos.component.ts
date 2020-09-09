import{ Component, Input} from '@angular/core';

@Component({
  selector:'tabela-cursos',
  templateUrl:`./tabela-cursos.component.html`,
  styleUrls: ['./tabela-cursos.component.css']
})

export class TabelaCursosComponent{
  @Input() cursos=[
    {nome: 'Análise e Desenvolvimento de Sistemas'},
    {nome: 'Eventos'},
    {nome: 'Gestão Comercial'},
    {nome: 'Recursos Humanos'},
    {nome: 'Gestão Empresarial - EAD'},
  ];
}
