import { Component, OnInit, Input } from '@angular/core';
import { CarService } from 'src/app/core/services/car/car.service';
import { Observable, of } from 'rxjs';
import { Car } from 'src/app/core/models';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as carActions from '../../../core/actions/car.actions';
import { selectFleet, selectQuery, selectCar } from 'src/app/core/selectors/car.selectors';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @Input() items: Observable<Car[]>;
  ids$: Observable<Set<string>>;
  constructor(private carService: CarService, private store: Store<AppState>) { }

  ngOnInit(): void {
    // Select filter query
    this.store.select(selectQuery).pipe(
      tap(query => this.onSearch(query)))
      .subscribe();
  }

  selectItem(car: Car): void {
    this.store.dispatch(carActions.select({ car }));
  }

  /**
   * 
   * @description filters fleet on male, model and name
   */
  onSearch(query: string): void {
    this.store.dispatch(carActions.search({ query }));
    this.ids$ = this.items.pipe(map(cars => {
      const validCars = cars.filter(car =>
        car.name.toLocaleLowerCase()
          .includes(query.trim().toLocaleLowerCase()) ||
        car.make.toLocaleLowerCase()
          .includes(query.trim().toLocaleLowerCase()) ||
        car.model.toLocaleLowerCase()
          .includes(query.trim().toLocaleLowerCase())
      );
      return new Set(validCars.map(car => car.id));
    }));
  }
}
