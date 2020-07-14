import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car/car.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/core/models';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as carActions from '../../../core/actions/car.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  cars$: Observable<Car[]>;
  selectedCarId: string;
  constructor(private carService: CarService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cars$ = this.carService.get();
    // this.cars$.pipe(tap(cars => {
    //   if (cars) { this.selectItem(cars[0]); }
    // })).subscribe();
  }
  selectItem(car: Car): void {
    this.selectedCarId = car.id;
    this.store.dispatch(carActions.select({car}));
  }
}
