import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers, effects } from './store';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    StoreModule.forFeature('inmueble', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class InmuebleModule {}
