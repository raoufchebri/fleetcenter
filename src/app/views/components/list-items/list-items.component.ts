import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car/car.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/core/models';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as carActions from '../../../core/actions/car.actions';
import { selectFleet } from 'src/app/core/selectors/car.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  cars$: Observable<Car[]>;
  selectedCarId: string;
  ids$: Observable<Set<string>>;
  constructor(private carService: CarService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cars$ = this.store.select(selectFleet);
    this.onSearch('');
  }
  selectItem(car: Car): void {
    this.selectedCarId = car.id;
    this.store.dispatch(carActions.select({ car }));
  }
  onSearch(query: string): void {
    this.ids$ = this.cars$.pipe(map(cars => {
      const validCars = cars.filter(car =>
        car.name.toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()));
      return new Set(validCars.map(car => car.id));
    }));
  }
}
