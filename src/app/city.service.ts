import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class CityService {
  constructor(private http: HttpClient) {}

  getWeatherData(city) {
    let data = timer(0, 2000).pipe(
      switchMap((value) => {
        return this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            city +
            '&appid=656e6411f16bc453a68ffc8614adf9ce'
        );
      }),
      share()
    );
    return data;
  }
}
