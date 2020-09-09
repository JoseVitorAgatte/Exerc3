import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ FatecLogoComponent } from './fatec-logo/fatec-logo.component';

import{ TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';

import { CursoAdicionaComponent } from "./curso-adiciona/curso-adiciona.component";

@NgModule({
  declarations: [
    AppComponent,
    FatecLogoComponent,
    TabelaCursosComponent,
    CursoAdicionaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
