import { createFeatureSelector } from '@ngrx/store';
// import { Weather } from '../models/weather';
import { Weather } from '@bp/weather-forecast/services';
 
export const selectWeather = createFeatureSelector<ReadonlyArray<Weather>>('weather');