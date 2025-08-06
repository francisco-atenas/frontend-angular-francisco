import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleNuevoRoutingModule } from './inmueble-nuevo-routing.module';
import { InmuebleNuevoComponent } from './inmueble-nuevo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerModule } from '@app/shared/indicators';
import { EntityPhotoModule } from '@app/shared/layouts';
import { PopupsModule } from '@app/shared/popups';

@NgModule({
  declarations: [InmuebleNuevoComponent],
  imports: [
    CommonModule,
    InmuebleNuevoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    SpinnerModule,
    EntityPhotoModule,
    PopupsModule,
  ],
})
export class InmuebleNuevoModule {}
