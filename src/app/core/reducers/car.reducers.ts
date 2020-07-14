import * as fromCar from '../actions/car.actions';
import { Car } from '../models';
import { createReducer, on, Action } from '@ngrx/store';

export interface State {
    car: Car;
}

const initialState: State = {
    car: undefined
};

const carReducer = createReducer(
    initialState,
    on(fromCar.select, (state, action) => ({ ...state, car:  action.car })),
);

export function reducer(state: State | undefined, action: Action): State {
    return carReducer(state, action);
}