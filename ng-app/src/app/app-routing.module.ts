import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/pages/accueil/accueil.component';
import { StreamersComponent } from './component/pages/streamers/streamers.component';

const routes: Routes = [

  { path: 'acceuil', component: AccueilComponent },
  { path: 'acceuil/streamers', component: StreamersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
