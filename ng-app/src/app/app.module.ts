import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { StreamersComponent } from './component/pages/streamers/streamers.component';
import { AccueilComponent } from './component/pages/accueil/accueil.component';
import { StreamerService } from './services/streamer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StreamersComponent,
    AccueilComponent
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
