import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { IdentificarComponent } from './identificar/identificar.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path: "cambiarclave",
    component : CambiarClaveComponent
  },
  {
    path: "identificar",
    component : IdentificarComponent
  },
  {
    path: "recuperarclave",
    component : RecuperarClaveComponent
  },
  {
    path: "registrarusuario",
    component: RegistrarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
