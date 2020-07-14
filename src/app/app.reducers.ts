import * as fromCar from './core/reducers/car.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    car: fromCar.State;
}

export const reducers: ActionReducerMap<AppState> = {
    car: fromCar.reducer
};

