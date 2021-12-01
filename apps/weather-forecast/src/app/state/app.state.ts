import { Weather, City } from '@bp/weather-forecast/services';

export interface AppState {
  weather: ReadonlyArray<Weather>;
  city: City
}