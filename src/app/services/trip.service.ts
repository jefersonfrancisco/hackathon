import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Trip } from '../entities/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  public getTrip(code: string) : Observable<any> {
    return this.http.get<Trip[]>("URL API")
    .pipe(delay(2000), tap(console.log));
  }

}
