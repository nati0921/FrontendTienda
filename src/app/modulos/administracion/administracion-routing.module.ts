import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonasComponent } from './personas/crear-personas/crear-personas.component';

const routes: Routes = [
  {
    path: "crearpersonas",
    component : CrearPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
