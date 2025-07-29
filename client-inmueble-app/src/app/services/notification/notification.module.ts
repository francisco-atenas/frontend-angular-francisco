import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';
import { NotificationComponent } from './components/notification/notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule for notifications

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    MatSnackBarModule, // Import MatSnackBarModule for notifications
  ],
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders<NotificationModule> {
    return {
      ngModule: NotificationModule,
      providers: [NotificationService],
    };
  }
}
