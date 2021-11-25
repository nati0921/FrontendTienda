import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { CrearSolicitudComponent } from './gestionar-solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './gestionar-solicitudes/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './gestionar-solicitudes/eliminar-solicitud/eliminar-solicitud.component';
import { BuscarSolicitudComponent } from './gestionar-solicitudes/buscar-solicitud/buscar-solicitud.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    BuscarSolicitudComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    EliminarProductosComponent,
    BuscarProductosComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
