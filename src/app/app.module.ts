import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HorizontalNavBarComponent } from './horizontal-nav-bar/horizontal-nav-bar.component';
import { HomeComponent } from './home/home.component';

import { InViewportModule } from 'ng-in-viewport';
import { SponsorTileComponent } from './sponsor-tile/sponsor-tile.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

@NgModule({
  declarations: [
    AppComponent,
    HorizontalNavBarComponent,
    HomeComponent,
    SponsorTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    InViewportModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
