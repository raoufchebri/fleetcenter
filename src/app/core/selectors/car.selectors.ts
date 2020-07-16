import { createSelector } from '@ngrx/store';
import * as fromCar from '../reducers/car.reducers';
import { AppState } from '../../app.reducers';

export const selectCarState = (state: AppState) => state.car;
export const selectCar = createSelector(
    selectCarState,
    (state: fromCar.State) => state.selectedCar
);
export const selectFleet = createSelector(
    selectCarState,
    (state: fromCar.State) => state.fleet
);
