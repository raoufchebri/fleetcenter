import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Car } from 'src/app/core/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() car: Car;
  @Input() selected = false;

  constructor() { }

  ngOnInit(): void {
  }



}
