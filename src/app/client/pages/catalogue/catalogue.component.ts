import { CatalogueService } from './../../../shared/services/catalogue.service';
import { Catalogue } from './../../../shared/models/catalogue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  Catalogue: Catalogue|undefined
  constructor( private myservice:CatalogueService) { }

  ngOnInit(): void {
    this.myservice.getCatalogues().subscribe((data)=>this.Catalogue=data)
  }

}
