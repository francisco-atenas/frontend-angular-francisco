import { UserResponse } from './user.models';
import * as fromActions from './user.actions';

export interface UserState {
  entity: UserResponse | null;
  id: string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  id: null,
  loading: null,
  error: null,
};

export function reducer(state = initialState, action: any): UserState {
  switch (action.type) {
    case fromActions.Types.INIT:
      return {
        ...state,
        loading: true,
      };
    case fromActions.Types.INIT_AUTHORIZED:
      return {
        ...state,
        entity: action.user,
        id: action.user.id,
        loading: false,
        error: null,
      };
    case fromActions.Types.INIT_ERROR:
      return {
        ...state,
        entity: null,
        id: null,
        loading: false,
        error: action.error,
      };
    case fromActions.Types.INIT_UNAUTHORIZED:
      return {
        ...state,
        entity: null,
        id: null,
        loading: false,
        error: null,
      };

    // LOGIN
    case fromActions.Types.SIGNIN_IN_EMAIL:
      return {
        ...state,
        loading: true,
        entity: null,
        error: null,
        id: null,
      };
    case fromActions.Types.SIGNIN_IN_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        entity: action.user,
        id: action.user.id,
        error: null,
      };
    case fromActions.Types.SIGNIN_IN_EMAIL_ERROR:
      return {
        ...state,
        loading: false,
        entity: null,
        id: null,
        error: action.error,
      };

    // SIGNUP
    case fromActions.Types.SIGNUP_IN_EMAIL:
      return {
        ...state,
        loading: true,
        entity: null,
        error: null,
        id: null,
      };
    case fromActions.Types.SIGNUP_IN_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        entity: action.user,
        id: action.user.id,
        error: null,
      };
    case fromActions.Types.SIGNUP_IN_EMAIL_ERROR:
      return {
        ...state,
        loading: false,
        entity: null,
        id: null,
        error: action.error,
      };

    // LOGOUT
    case fromActions.Types.SIGN_OUT_EMAIL:
      return { ...initialState };
    case fromActions.Types.SIGN_OUT_EMAIL_SUCCESS:
      return { ...initialState };
    case fromActions.Types.SIGN_OUT_EMAIL_ERROR:
      return {
        ...state,
        loading: false,
        entity: null,
        id: null,
        error: action.error,
      };
    default:
      return state;
  }
}
