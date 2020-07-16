import * as fromCar from '../actions/car.actions';
import { Car } from '../models';
import { createReducer, on, Action } from '@ngrx/store';

export interface State {
    selectedCar: Car;
    fleet: Car[];
}

const initialState: State = {
    selectedCar: undefined,
    fleet: undefined
};

const carReducer = createReducer(
    initialState,
    on(fromCar.select, (state, action) => ({ ...state, selectedCar:  action.car })),
    on(fromCar.loadSuccess, (state, action) => ({ ...state, fleet: action.fleet}))
);

export function reducer(state: State | undefined, action: Action): State {
    return carReducer(state, action);
}
