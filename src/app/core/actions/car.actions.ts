import { createAction, props } from '@ngrx/store';
import { Car } from '../models';

export const select = createAction('[Car List] Select Car', props<{car: Car}>());
