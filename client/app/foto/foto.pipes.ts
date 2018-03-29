import {Pipe, PipeTransform} from '@angular/core';
import {PhotoComponent} from './foto.component';

@Pipe({
  name: 'titleFilter'
})

export class TitleFilter implements PipeTransform {
  transform(photos: PhotoComponent[], typed: string) {
    typed = typed.toLowerCase();
    return photos.filter(foto => foto.titulo.toLowerCase().includes(typed));
  }
}