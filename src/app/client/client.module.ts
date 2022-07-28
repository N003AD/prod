


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PanierComponent } from './pages/panier/panier.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListeComponent } from './components/liste/liste.component';


@NgModule({
    declarations: [
    PanierComponent,
    CardsComponent,
    ListeComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,

  ],
  exports: [
    CardsComponent,
    ListeComponent
  ]
})
export class ClientModule { }
