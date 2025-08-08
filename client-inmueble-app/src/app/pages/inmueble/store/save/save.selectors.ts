import { createSelector } from '@ngrx/store';
import { getInmuebleState, InmuebleState } from '../index';
import { ListState } from './save.reducer';

export const getListState = createSelector(
  getInmuebleState,
  (state: InmuebleState) => state.list
);

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
);
