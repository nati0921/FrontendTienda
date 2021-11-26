import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonasComponent } from './personas/buscar-personas/buscar-personas.component';
import { CrearPersonasComponent } from './personas/crear-personas/crear-personas.component';
import { EditarPersonasComponent } from './personas/editar-personas/editar-personas.component';
import { EliminarPersonasComponent } from './personas/eliminar-personas/eliminar-personas.component';

const routes: Routes = [
    {
    path: "personas/crearpersona",
    component: CrearPersonasComponent
  },
  {
    path: "personas/editarpersona",
    component: EditarPersonasComponent
  },
  {
    path: "personas/buscarpersona",
    component: BuscarPersonasComponent
  },
  {
    path: "personas/eliminarpersona",
    component: EliminarPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
