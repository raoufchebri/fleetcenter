import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as carActions from '../actions/car.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CarService } from '../services/car/car.service';

@Injectable()
export class CarEffects {

    loadCars$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(carActions.load),
            mergeMap(() =>
                this.carService.get().pipe(
                    map(cars => carActions.loadSuccess({ fleet: cars })),
                    catchError(error => of(carActions.loadFailure({ error }))))
            ),
        );
    });

    createCar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(carActions.create),
            mergeMap(({ car }) =>
                this.carService.create(car).pipe(
                    map(() => carActions.load()),
                    catchError(error => of(carActions.loadFailure({ error }))))
            ),
        );
    });

    removeCar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(carActions.remove),
            mergeMap(({ id }) =>
                this.carService.delete(id).pipe(
                    map(() => carActions.load()),
                    catchError(error => of(carActions.loadFailure({ error }))))
            ),
        );
    });

    constructor(
        private actions$: Actions,
        private carService: CarService
    ) { }
}
