import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showSpinner = false;
  title = 'cli-inmueble-app';
  user$!: Observable<fromUser.UserResponse>;
  isAuthorized$!: Observable<boolean>;

  constructor(
    private fs: AngularFirestore,
    private notification: NotificationService,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(
      select(fromUser.getUser)
    ) as Observable<fromUser.UserResponse>;
    this.isAuthorized$ = this.store.pipe(
      select(fromUser.getIsAuthorized)
    ) as Observable<boolean>;

    this.store.dispatch(new fromUser.Init());
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onFilesChanged(urls: string | string[]): void {
    console.log('Files changed:', urls);
  }

  onSuccess(): void {
    this.notification.success('El procedimiento fue realizado con éxito');
  }

  onError(): void {
    this.notification.error('Ocurrió un error al realizar el procedimiento');
  }

  onSignOut(): void {
    localStorage.removeItem('token');
    this.store.dispatch(new fromUser.SignoutEmail());
    this.router.navigate(['/auth/login']);
  }
}
