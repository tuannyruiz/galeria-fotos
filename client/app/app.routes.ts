import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {ListComponent} from './list/list.component';

const appRoutes: Routes = [
  {path: '', component: ListComponent},
  {path: 'cadastro', component: RegisterComponent},
  {path: '**', component: ListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);