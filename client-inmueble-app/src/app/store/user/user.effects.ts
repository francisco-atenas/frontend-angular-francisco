import { Injectable } from '@angular/core';
import * as fromActions from './user.actions';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '@src/environments/environment';
import { UserResponse } from './user.models';

type Action = fromActions.All;

@Injectable()
export class UserEffects {
  constructor(
    private httpClient: HttpClient,
    private actions: Actions,
    private notifications: NotificationService,
    private router: Router
  ) {}

  signUpEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGNUP_IN_EMAIL),
      map((action: fromActions.SignupEmail) => action.user),
      switchMap((userData) =>
        this.httpClient
          .post<UserResponse>(
            `${environment.url}api/authentication/sign-up`,
            userData
          )
          .pipe(
            tap((response: UserResponse) => {
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map(
              (response: UserResponse) =>
                new fromActions.SignupEmailSuccess(
                  response.email,
                  response || null
                )
            ),
            catchError((error: any) => {
              this.notifications.error('Errores al registrar un nuevo usuario');
              return of(new fromActions.SignupEmailError(error.message));
            })
          )
      )
    )
  );

  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGNIN_IN_EMAIL),
      map((action: fromActions.SigninEmail) => action.credentials),
      switchMap((userData) =>
        this.httpClient
          .post<UserResponse>(
            `${environment.url}api/authentication/sign-in`,
            userData
          )
          .pipe(
            tap((response: UserResponse) => {
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map(
              (response: UserResponse) =>
                new fromActions.SigninEmailSuccess(
                  response.email,
                  response || null
                )
            ),
            catchError((error: any) => {
              this.notifications.error('Las credenciales son incorrectas');
              return of(new fromActions.SigninEmailError(error.message));
            })
          )
      )
    )
  );

  init: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.INIT),
      switchMap(async () => localStorage.getItem('token')),
      switchMap((token) => {
        if (token) {
          return this.httpClient
            .get<UserResponse>(`${environment.url}api/user`)
            .pipe(
              tap((response: UserResponse) => {
                console.log(
                  'data del usuario en sesión que viene del servidor',
                  response
                );
              }),
              map(
                (response: UserResponse) =>
                  new fromActions.InitAuthorized(
                    response.email,
                    response || null
                  )
              ),
              catchError((error: any) => {
                return of(new fromActions.InitError(error.message));
              })
            );
        } else {
          return of(new fromActions.InitUnauthorized());
        }
      })
    )
  );
}
