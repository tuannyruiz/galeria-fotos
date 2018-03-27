import {Pipe, PipeTransform} from '@angular/core';
import {PhotoComponent} from './photo.component';

@Pipe({
  name: 'titleFilter'
})

export class TitleFilter implements PipeTransform {
  transform(photos: PhotoComponent[], typed: string) {
    typed = typed.toLowerCase();
    return photos.filter(photo => photo.title.toLowerCase().includes(typed));
  }
}