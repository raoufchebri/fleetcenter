import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Car } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { selectCar } from '../../../core/selectors/car.selectors';
import { tap, map } from 'rxjs/operators';
import { google } from '@google/maps';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  car$: Observable<Car>;
  center: google.maps.LatLngLiteral;
  position: google.maps.LatLngLiteral[];
  markers: any = [];
  readonly = true;
  keys$: Observable<string[]>;
  invalidProps = new Set(['id', 'position']);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.car$ = this.store.select(selectCar);
    this.car$.pipe(tap(car => {
      if (car) {
        const { lat, lon: lng } = car.position;
        this.center = { lat, lng };
        this.position = [this.center];
        this.addMarker(car.name);
      }
    })).subscribe();

    this.keys$ = this.car$.pipe(map(car => {
      const keys = Object.keys(car);
      const validKeys = [];
      for (const key of keys) {
        if (!this.invalidProps.has(key)) {
          validKeys.push(key);
        }
      }
      return validKeys;
    }));
  }

  addMarker(title): void {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
      label: {
        color: 'red',
        text: title,
      },
      title,
    });
  }

  isValidProp(prop: string): boolean {
    return this.invalidProps.has(prop) ? false : true;
  }

  readonlyToggle(): void {
    this.readonly = !this.readonly;
  }

  camelCaseToSentence(text: string): string {
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}

