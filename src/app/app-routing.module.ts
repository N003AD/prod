import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './client/client.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => ClientModule) },
  { path: "**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
