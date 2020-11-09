import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../user';

export interface SearchResponse{
  Search : Movie[],
  Response : boolean,
  totalResults : number
} 
@Injectable({
  providedIn: 'root'
  })
export class MovieService {

  apiRoute = 'http://www.omdbapi.com/';
  apiKey = 'bcd24adc';
  constructor(private httpClient : HttpClient) { }

  SearchMovie(title : string) : Observable<SearchResponse>{
     return this.httpClient.get<SearchResponse>(`${this.apiRoute}?s=${title}&apiKey=${this.apiKey}`)  ;
  } 
}
