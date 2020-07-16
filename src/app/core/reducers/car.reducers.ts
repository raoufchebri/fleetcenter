import * as fromCar from '../actions/car.actions';
import { Car } from '../models';
import { createReducer, on, Action } from '@ngrx/store';

export interface State {
    selectedCar: Car;
    fleet: Car[];
    query: string;
}

const initialState: State = {
    selectedCar: undefined,
    fleet: undefined,
    query: ''
};

const carReducer = createReducer(
    initialState,
    on(fromCar.select, (state, action) => ({ ...state, selectedCar:  action.car })),
    on(fromCar.loadSuccess, (state, action) => ({ ...state, fleet: action.fleet})),
    on(fromCar.search, (state, action) => ({ ...state, query: action.query})),
);

export function reducer(state: State | undefined, action: Action): State {
    return carReducer(state, action);
}
