import { Component, OnInit } from '@angular/core';
import { Car } from '../../../core/models';
import { CarService } from '../../../core/services/car/car.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor(private carService: CarService) { }

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

    this.carService.create(car).subscribe(data => console.log('Car successfully added'));
  }
}
