import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  BASE_URL = 'https://j8vz2goe68.execute-api.eu-west-3.amazonaws.com/dev/crud';
  constructor(private httpClient: HttpClient) { }

  create(car: Car): Observable<any> {
    return this.httpClient.post<Car>(this.BASE_URL, car);
  }
  get(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.BASE_URL);
  }

  update(id: string, car: Car): Observable<any> {
    return this.httpClient.put(`${this.BASE_URL}/${id}`, car);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.BASE_URL}/${id}`);
  }
}
