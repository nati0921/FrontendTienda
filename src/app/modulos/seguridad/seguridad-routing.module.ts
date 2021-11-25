import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificarComponent } from './identificar/identificar.component';

const routes: Routes = [
  {
    path: "identificar",
    component: IdentificarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
