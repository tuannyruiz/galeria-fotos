import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {RegisterComponent} from './register/register.component'; // component será utilizado apenas nessa aplicação específica
import {PhotoModule} from './photo/photo.module'; // module poderá ser exportado em outras aplicações
import {PanelModule} from './panel/panel.module';
import {routing} from './app.routes';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [BrowserModule, PhotoModule, HttpModule, PanelModule, routing],
  declarations: [AppComponent, RegisterComponent, ListComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}