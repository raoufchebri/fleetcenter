import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as carActions from '../../../core/actions/car.actions';
import { Car } from 'src/app/core/models';
import { selectFleet, selectCar } from 'src/app/core/selectors/car.selectors';
import { tap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() car: Car;
  @Input() colored: boolean;
  isCarSelected: Observable<Car>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.store.dispatch(carActions.remove({ id: this.car.id }));
    this.store.dispatch(carActions.select({ car: undefined }));
  }

  showModal(): void {
    $(`.mini.modal.${this.car.id}.${this.colored}`).modal('show');
  }
}
