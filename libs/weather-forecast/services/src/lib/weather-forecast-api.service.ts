import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City, Weather } from './data';


@Injectable({providedIn: 'root'})
export class WeatherForecastApiService {
	private _apiKey = '010721642521f31b0fbc8c3831d45951';
	private endpoint = 'https://api.openweathermap.org/';

	constructor(private http: HttpClient) {
	}

	getCity(city: String): Observable<City[]> {
		return this.http.get<City[]>(`${this.endpoint}/geo/1.0/direct?q=${city}&limit=1&appid=${this._apiKey}`);
	}

	getHourlyWeather(lat: Number, lon: Number): Observable<Weather[]> {
		return this.http.get<{hourly: Weather[]}>(
			`${this.endpoint}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&units=metric&appid=${this._apiKey}`
			)
		.pipe(map((weather) => weather.hourly || []));
	}

	getDailyWeather(lat: Number, lon: Number): Observable<Weather[]> {
		return this.http.get<{daily: Weather[]}>(
			`${this.endpoint}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${this._apiKey}`
			)
		.pipe(map((weather) => weather.daily || []));
	}
}