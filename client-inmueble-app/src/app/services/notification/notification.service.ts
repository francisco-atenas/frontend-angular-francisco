import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from './components';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: { message },
      duration: 3000,
      panelClass: ['mat-snackbar_error'],
    });
  }

  success(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: { message },
      duration: 3000,
      panelClass: ['mat-snackbar_success'],
    });
  }
}
