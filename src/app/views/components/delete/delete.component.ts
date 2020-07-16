import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as carActions from '../../../core/actions/car.actions';
import { Car } from 'src/app/core/models';

declare var $: any;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() car: Car;
  @Input() colored: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.store.dispatch(carActions.remove({ id: this.car.id }));
  }

  showModal(): void {
    $(`.mini.modal.${this.car.id}.${this.colored}`).modal('show');
  }
}
