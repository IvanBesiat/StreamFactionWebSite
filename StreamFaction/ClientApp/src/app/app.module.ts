import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { StreamersComponent } from './component/pages/streamers/streamers.component';
import { AccueilComponent } from './component/pages/accueil/accueil.component';
import { StreamerService } from './services/streamer.service';
import { AccueilViewComponent } from './views/accueil-view/accueil-view.component';
import { StreamersViewComponent } from './views/streamers-view/streamers-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { ActualitesViewComponent } from './views/actualites-view/actualites-view.component';
import { ActualitesComponent } from './component/pages/actualites/actualites.component';
import { CalendrierViewComponent } from './views/calendrier-view/calendrier-view.component';
import { ActualiteService } from './services/actualite.service';
import { CalendrierComponent } from './component/calendrier/calendrier.component';
import { InfosAssoComponent } from './component/infos-asso/infos-asso.component';
import { InfosViewComponent } from './views/infos-view/infos-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StreamersComponent,
    AccueilComponent,
    ActualitesComponent,
    CalendrierComponent,
    AccueilViewComponent,
    StreamersViewComponent,
    NotFoundViewComponent,
    ActualitesViewComponent,
    CalendrierViewComponent,
    InfosAssoComponent,
    InfosViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StreamerService,
    ActualiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
