import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, timer} from 'rxjs';
import { share, switchMap } from 'rxjs/operators';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class CityService {
  constructor(private http: HttpClient) {}

  getWeatherData(city) {
    let data = timer(0, 30000).pipe(
      switchMap((value) => {
        return this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            city +
            '&appid=656e6411f16bc453a68ffc8614adf9ce'
        );
      }),
      share(),
      catchError(this.errorHandler)
    );
    return data;
  }

  errorHandler(error:HttpErrorResponse){
      return throwError(error)
  }
}
