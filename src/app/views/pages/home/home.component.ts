declare var $: any;
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { selectCar } from 'src/app/core/selectors/car.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as carActions from '../../../core/actions/car.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fleet: any[] = [{ name: 'some car' }];
  isSelected: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(carActions.load());
    this.isSelected = this.store.select(selectCar).pipe(map(car => {
      return car != null;
    }));
  }
  show(): void {
    $('.ui.modal').modal('show');
  }

  toggle(): void {
    $('.ui.sidebar').sidebar('toggle');
  }
}
