import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PanierComponent } from './pages/panier/panier.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListeComponent } from './components/liste/liste.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
    declarations: [
    PanierComponent,
    CardsComponent,
    ListeComponent,
    CatalogueComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule
  ],
  exports: [
    CardsComponent,
  ]
})
export class ClientModule { }
