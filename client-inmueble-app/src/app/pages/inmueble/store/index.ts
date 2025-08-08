import * as fromList from './save/save.reducer';
import { SaveEffects } from './save/save.effects';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface InmuebleState {
  list: fromList.ListState;
}

export const reducers: ActionReducerMap<InmuebleState> = {
  list: fromList.reducer,
};
export const getInmuebleState =
  createFeatureSelector<InmuebleState>('inmueble');

export const effects: any = [SaveEffects];
