import { Details } from './../../../shared/models/details';
import { DetailsService } from './../../../shared/services/details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 details:Details|null=null
  constructor( private myservice:DetailsService) { }

  ngOnInit(): void {
    this.myservice.getDetails().subscribe((data)=>this.details=data)

  }

}
