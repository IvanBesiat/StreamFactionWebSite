import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/pages/accueil/accueil.component';
import { StreamersComponent } from './component/pages/streamers/streamers.component';

const routes: Routes = [

  { path: '', component: AccueilComponent },
  { path: 'acceuil', component: AccueilComponent },
  { path: '/streamers', component: StreamersComponent },
  //{path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
