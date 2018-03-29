import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {RegisterComponent} from './register/register.component'; // component será utilizado apenas nessa aplicação específica
import {FotoModule} from './foto/foto.module'; // module poderá ser exportado em outras aplicações
import {PainelModule} from './painel/painel.module';
import {routing} from './app.routes';
import {FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [BrowserModule, FotoModule, HttpModule, PainelModule, FormsModule, routing],
  declarations: [AppComponent, RegisterComponent, ListComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}