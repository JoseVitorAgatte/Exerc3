import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import{ FatecLogoComponent } from './fatec-logo/fatec-logo.component';

import{ TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';

import { CursoAdicionaComponent } from "./curso-adiciona/curso-adiciona.component";

import { AlunosComponent } from './alunos/alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    FatecLogoComponent,
    TabelaCursosComponent,
    CursoAdicionaComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
