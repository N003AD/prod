import { Details } from './../models/details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private url:string = "http://localhost:8000/api/details/18";


  constructor(private http:HttpClient) { }
  getDetails():Observable<Details>{


    return this.http.get<Details>(this.url).pipe(
      map(
        (data)=>{
          return data
        }
      )
    )
  }
}

