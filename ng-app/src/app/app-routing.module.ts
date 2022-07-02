import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilViewComponent } from './views/accueil-view/accueil-view.component';
import { StreamersViewComponent } from './views/streamers-view/streamers-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

const routes: Routes = [

  { path: '', component: AccueilViewComponent },
  { path: 'acceuil', component: AccueilViewComponent },
  { path: '/streamers', component: StreamersViewComponent },
  {path: 'not-found', component: NotFoundViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
