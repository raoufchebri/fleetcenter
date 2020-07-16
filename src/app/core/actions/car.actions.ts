import { createAction, props } from '@ngrx/store';
import { Car } from '../models';

export const select = createAction('[Car List] Select Car', props<{car: Car}>());
export const load = createAction('[Car List] Load Fleet');
export const loadSuccess = createAction('[Car List] Load Fleet Success', props<{fleet: Car[]}>());
export const loadFailure = createAction('[Car List] Load Fleet Failure', props<{error: string}>());
export const create = createAction('[Create Modal] Create Car', props<{car: Car}>());
export const createSuccess = createAction('[Create Modal] Create Car Success', props<{car: Car}>());
export const createFailure = createAction('[Create Modal] Create Car Failure', props<{error: string}>());
export const remove = createAction('[Car List] Delete', props<{id: string}>());
export const search = createAction('[Car List] Search', props<{query: string}>());
