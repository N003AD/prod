import { Catalogue } from './../models/catalogue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
   private url:string = "http://localhost:3000/catalogues";
  constructor( private http:HttpClient ) {

  }
  getCatalogues():Observable<Catalogue>{
    return this.http.get<any>(this.url).pipe(
      map(
        data=>{
          let Catalogue: Catalogue={
            burgers: data['hydra:member'][0].burgers,
            menus: data['hydra:member'][1].menus,
            produits:[... data['hydra:member'][0].burger,...data['hydra:member'][1].menu]
          }
           console.log(data)
          return Catalogue
        }
      ),
    )
  }
}
