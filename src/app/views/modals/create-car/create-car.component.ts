import { Component, OnInit } from '@angular/core';
import { Car } from '../../../core/models';
import { CarService } from '../../../core/services/car/car.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as carActions from '../../../core/actions/car.actions';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  // Form Controls
  form = new FormGroup({
    name: new FormControl(),
    vin: new FormControl(),
    make: new FormControl(),
    model: new FormControl(),
    year: new FormControl(),
    fuelType: new FormControl(),
    type: new FormControl(),
    odometer: new FormControl()
  });
  constructor(private carService: CarService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  submit(): void {
    const { name, vin, make, model, year, fuelType, type, odometer} = this.form.controls;
    const car: Car = {
      name: name.value,
      vin: vin.value,
      make: make.value,
      model: model.value,
      year: year.value,
      fuelType: fuelType.value,
      type: type.value,
      position: {
        lat: null,
        lon: null
      },
      odometer: odometer.value,
      fuel: null,
      battery: null
    };

    this.store.dispatch(carActions.create({car}));
  }
}
