import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {TitleFilter} from './foto.pipes';

@NgModule({
  declarations: [FotoComponent, TitleFilter], // Tudo que faz parte do módulo.
  exports: [FotoComponent, TitleFilter] // O que eu quero permitir que outros módulos utilizem.
})

export class FotoModule {

}