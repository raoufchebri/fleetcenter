import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car/car.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/core/models';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  cars$: Observable<Car[]>;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars$ = this.carService.get();
  }

}
