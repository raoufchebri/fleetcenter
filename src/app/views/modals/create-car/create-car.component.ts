import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Car } from '../../../core/models';
import { CarService } from '../../../core/services/car/car.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as carActions from '../../../core/actions/car.actions';

declare var $: any;

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  // Form Controls
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    vin: new FormControl('', [Validators.required]),
    make: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    fuelType: new FormControl('', [Validators.required]),
    type: new FormControl(),
    odometer: new FormControl()
  });
  constructor(private carService: CarService, private store: Store<AppState>) { }

  ngOnInit(): void {

  }
  submit(): void {
    const { name, vin, make, model, year, fuelType, type, odometer } = this.form.value;
    const car: Car = {
      name,
      vin,
      make,
      model,
      year,
      fuelType,
      type,
      position: {
        lat: null,
        lon: null
      },
      odometer,
      fuel: null,
      battery: null
    };
    if (this.form.valid) {
      this.store.dispatch(carActions.create({ car }));
      this.form.reset();
    }
    // const file = this.fileInput.nativeElement.files[0];
    // console.log(file);
    // this.form.reset();
    $('app-create-car').modal('hide');
  }
}
