import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attraction } from './models/Attraction';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  private apiUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getAttractions = () => {
    return this.http.get<Attraction[]>(this.apiUrl + 'attractions');
  }

  getAttracionById = (id: number) => {
    return this.http.get<Attraction>(this.apiUrl + 'attractions/' + id);
  }
  
  giveFeedBack = () => {} // not yet implemented
}
