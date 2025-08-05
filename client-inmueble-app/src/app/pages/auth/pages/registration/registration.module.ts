import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { IndicatorsModule, SpinnerModule } from '@app/shared/indicators';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    IndicatorsModule,
    SpinnerModule,
  ],
})
export class RegistrationModule {}
