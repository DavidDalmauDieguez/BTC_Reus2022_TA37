import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonajesComponent} from './personajes/personajes.component';

const routes: Routes = [{
  path: 'personajes',
  component:PersonajesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
