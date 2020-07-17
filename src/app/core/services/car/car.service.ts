import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient) { }

  create(car: Car): Observable<any> {
    return this.httpClient.post<Car>(environment.apiUrl, car);
  }
  get(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(environment.apiUrl);
  }

  update(id: string, car: Car): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/${id}`, car);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/${id}`);
  }
}
