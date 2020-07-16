import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Car } from 'src/app/core/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as carActions from '../../../core/actions/car.actions';
import { selectCar } from 'src/app/core/selectors/car.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() car: Car;
  isSelected: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectCar).pipe(tap(car => {
      if (car) {
        this.isSelected = this.car.id === car.id;
      }
    })).subscribe();
  }

  selectItem(car: Car): void {
    this.store.dispatch(carActions.select({ car }));
  }

}
