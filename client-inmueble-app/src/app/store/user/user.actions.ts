import { Action } from '@ngrx/store';
import {
  UsernamePasswordCredentials,
  UserCreateRequest,
  UserResponse,
} from './user.models';

export enum Types {
  INIT = '[User] Init:start',
  INIT_AUTHORIZED = '[User] Init:Authorized',
  INIT_UNAUTHORIZED = '[User] Init:Unauthorized',
  INIT_ERROR = '[User] Init:Error',

  SIGNIN_IN_EMAIL = '[User] Login:Start',
  SIGNIN_IN_EMAIL_SUCCESS = '[User] Login:Success',
  SIGNIN_IN_EMAIL_ERROR = '[User] Login:Error',

  SIGNUP_IN_EMAIL = '[User] Signup:Start',
  SIGNUP_IN_EMAIL_SUCCESS = '[User] Signup:Success',
  SIGNUP_IN_EMAIL_ERROR = '[User] Signup:Error',

  SIGN_OUT_EMAIL = '[User] Logout:Start',
  SIGN_OUT_EMAIL_SUCCESS = '[User] Logout:Success',
  SIGN_OUT_EMAIL_ERROR = '[User] Logout:Error',
}

//INIT -> EL USUARIO ESTA EN SESION?
export class Init implements Action {
  readonly type = Types.INIT;
  constructor() {}
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;
  constructor(public username: string, public user: UserResponse | null) {}
}

export class InitUnauthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor() {}
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;
  constructor(public error: string) {}
}

//LOGIN
export class SigninEmail implements Action {
  readonly type = Types.SIGNIN_IN_EMAIL;
  constructor(public credentials: UsernamePasswordCredentials) {}
}

export class SigninEmailSuccess implements Action {
  readonly type = Types.SIGNIN_IN_EMAIL_SUCCESS;
  constructor(public email: string, public user: UserResponse) {}
}

export class SigninEmailError implements Action {
  readonly type = Types.SIGNIN_IN_EMAIL_ERROR;
  constructor(public error: string) {}
}

//SIGNUP o REGISTRO
export class SignupEmail implements Action {
  readonly type = Types.SIGNUP_IN_EMAIL;
  constructor(public user: UserCreateRequest) {}
}

export class SignupEmailSuccess implements Action {
  readonly type = Types.SIGNUP_IN_EMAIL_SUCCESS;
  constructor(public email: string, public user: UserResponse | null) {}
}

export class SignupEmailError implements Action {
  readonly type = Types.SIGNUP_IN_EMAIL_ERROR;
  constructor(public error: string) {}
}

//LOGOUT
export class SignoutEmail implements Action {
  readonly type = Types.SIGN_OUT_EMAIL;
  constructor() {}
}

export class SignoutEmailSuccess implements Action {
  readonly type = Types.SIGN_OUT_EMAIL_SUCCESS;
  constructor() {}
}

export class SignoutEmailError implements Action {
  readonly type = Types.SIGN_OUT_EMAIL_ERROR;
  constructor(public error: string) {}
}
export type All =
  | Init
  | InitAuthorized
  | InitUnauthorized
  | InitError
  | SigninEmail
  | SigninEmailSuccess
  | SigninEmailError
  | SignupEmail
  | SignupEmailSuccess
  | SignupEmailError
  | SignoutEmail
  | SignoutEmailSuccess
  | SignoutEmailError;
