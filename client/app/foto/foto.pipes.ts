import {Pipe, PipeTransform} from '@angular/core';
import {FotoComponent} from './foto.component';

@Pipe({
  name: 'titleFilter'
})

export class TitleFilter implements PipeTransform {
  transform(fotos: FotoComponent[], typed: string) {
    typed = typed.toLowerCase();
    return fotos.filter(foto => foto.titulo.toLowerCase().includes(typed));
  }
}