import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleNuevoRoutingModule } from './inmueble-nuevo-routing.module';
import { InmuebleNuevoComponent } from './inmueble-nuevo.component';


@NgModule({
  declarations: [
    InmuebleNuevoComponent
  ],
  imports: [
    CommonModule,
    InmuebleNuevoRoutingModule
  ]
})
export class InmuebleNuevoModule { }
