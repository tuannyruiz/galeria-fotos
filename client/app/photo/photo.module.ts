import {NgModule} from '@angular/core';
import {PhotoComponent} from './photo.component';

@NgModule({
  declarations: [PhotoComponent], // Tudo que faz parte do módulo.
  exports: [PhotoComponent] // O que eu quero permitir que outros módulos utilizem.
})

export class PhotoModule {

}