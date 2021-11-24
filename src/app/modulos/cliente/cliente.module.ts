import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { EnviarSolicitudesComponent } from './enviar-solicitudes/enviar-solicitudes.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { VerificarSolicitudesComponent } from './verificar-solicitudes/verificar-solicitudes.component';


@NgModule({
  declarations: [
    EnviarSolicitudesComponent,
    RealizarPedidoComponent,
    VerificarSolicitudesComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
