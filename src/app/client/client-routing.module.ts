import { ClientModule } from './client.module';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"catalogue",
    component: CatalogueComponent
  }
,
  {
    path: "",
    redirectTo:"catalogue",
    pathMatch: 'full'
  },
  {
    path: "details",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
