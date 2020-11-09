import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiUrl : string = "http://www.api.openweathermap.org";
  weatherApiKey : string = "f2a99d573ed28da5839be44b0897a914";

  constructor(private httpClient : HttpClient) { }

  search(imeGrada : string) : Observable<any>{
    return this.httpClient.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${imeGrada}&appid=${this.weatherApiKey}`);
  }
}
