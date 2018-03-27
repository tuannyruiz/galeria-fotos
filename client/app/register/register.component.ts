import {Component} from '@angular/core';
import {PhotoComponent} from '../photo/photo.component'

@Component ({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  photo: PhotoComponent = new PhotoComponent();

  cadastrar() {
    console.log(this.photo);
  }
}