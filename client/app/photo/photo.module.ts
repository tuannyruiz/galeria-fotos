import {NgModule} from '@angular/core';
import {PhotoComponent} from './photo.component';
import {TitleFilter} from './photo.pipes';

@NgModule({
  declarations: [PhotoComponent, TitleFilter], // Tudo que faz parte do módulo.
  exports: [PhotoComponent, TitleFilter] // O que eu quero permitir que outros módulos utilizem.
})

export class PhotoModule {

}