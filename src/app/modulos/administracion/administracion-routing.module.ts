import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionConfiguracionComponent } from './configuracion/gestion-configuracion/gestion-configuracion.component';
import { BuscarPersonasComponent } from './personas/buscar-personas/buscar-personas.component';
import { CrearPersonasComponent } from './personas/crear-personas/crear-personas.component';
import { EditarPersonasComponent } from './personas/editar-personas/editar-personas.component';
import { EliminarPersonasComponent } from './personas/eliminar-personas/eliminar-personas.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';

const routes: Routes = [
  {
    path: "personas/buscarpersonas",
    component : BuscarPersonasComponent
  },
  {
    path: "personas/crearpersonas",
    component : CrearPersonasComponent
  },
  {
    path: "personas/editarpersonas",
    component : EditarPersonasComponent
  },  
  {
    path: "personas/eliminarpersonas",
    component : EliminarPersonasComponent
  },
  {
    path: "productos/buscarproductos",
    component : BuscarProductosComponent
  },
  {
    path: "productos/crearproductos",
    component : CrearProductosComponent
  },
  {
    path: "productos/editarproductos",
    component : EditarProductosComponent
  },
  {
    path: "productos/eliminarproductos",
    component : EliminarProductosComponent
  },
  {
    path: "gestionconfiguracion",
    component: GestionConfiguracionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
