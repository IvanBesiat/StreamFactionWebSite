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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StreamersComponent,
    AccueilComponent,
    AccueilViewComponent,
    StreamersViewComponent,
    NotFoundViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StreamerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
