import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleListRoutingModule } from './inmueble-list-routing.module';
import { InmuebleListComponent } from './inmueble-list.component';


@NgModule({
  declarations: [
    InmuebleListComponent
  ],
  imports: [
    CommonModule,
    InmuebleListRoutingModule
  ]
})
export class InmuebleListModule { }
