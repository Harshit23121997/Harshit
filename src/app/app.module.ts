import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipPageComponent } from './flip-page/flip-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './material/material.module';
import { FriendsLandingComponent } from './friends-landing/friends-landing.component';
import { WeCanComponent } from './friends-landing/we-can/we-can.component';
import { EnlightenmentComponent } from './friends-landing/enlightenment/enlightenment.component';
import { CollegeFestComponent } from './friends-landing/college-fest/college-fest.component';
import { SearchComponent } from './friends-landing/search/search.component';
import { MecosComponent } from './friends-landing/mecos/mecos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlipPageComponent,
    AboutComponent,
    NavigationComponent,
    LandingComponent,
    FriendsLandingComponent,
    WeCanComponent,
    EnlightenmentComponent,
    CollegeFestComponent,
    SearchComponent,
    MecosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
