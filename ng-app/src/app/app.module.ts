import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarCompComponent } from './component/nav-bar-comp/nav-bar-comp.component';
import { FooterCompComponent } from './component/footer-comp/footer-comp.component';
import { StreamersComponent } from './component/pages/streamers/streamers.component';
import { AccueilComponent } from './component/pages/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarCompComponent,
    FooterCompComponent,
    StreamersComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
