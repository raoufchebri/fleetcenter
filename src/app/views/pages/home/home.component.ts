declare var $: any;
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { selectCar, selectFleet } from 'src/app/core/selectors/car.selectors';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as carActions from '../../../core/actions/car.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isItemSelected: Observable<boolean>;
  fleet$: Observable<Car[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(carActions.load());
    this.isItemSelected = this.store.select(selectCar).pipe(map(car => car != null));
    this.fleet$ = this.store.select(selectFleet);
  }
  show(): void {
    $('app-create-car').modal('show');
  }

  toggle(): void {
    $('.ui.sidebar').sidebar('toggle');
  }
}
