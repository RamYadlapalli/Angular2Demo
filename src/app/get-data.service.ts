import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {
 message = `GetData service`;
 cities=[
   {Name:"Hyderabad", Index:12},
   {Name:`Mumbai`, Index:23},
   {Name:`Bangalore`,Index:45}
 ];
  constructor() { }
  updateCityData(Index, CityName){
    this.cities = this.cities.map(m => 
    m.Index == Index
    ? {Index:Index, Name:CityName}
    : m
    )
  }
}
