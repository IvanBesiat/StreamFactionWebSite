import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilViewComponent } from './views/accueil-view/accueil-view.component';
import { StreamersViewComponent } from './views/streamers-view/streamers-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { ActualitesViewComponent } from './views/actualites-view/actualites-view.component';
import { CalendrierViewComponent } from './views/calendrier-view/calendrier-view.component';

const routes: Routes = [

  { path: '', component: AccueilViewComponent },
  { path: 'acceuil', component: AccueilViewComponent },
  { path: 'streamers', component: StreamersViewComponent },
  { path: 'actualites', component: ActualitesViewComponent },
  { path: 'calendrier', component: CalendrierViewComponent },
  {path: 'not-found', component: NotFoundViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
