//Modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared-modules/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { RegisterComponent } from './pages/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    SearchBarComponent,
    ArtistCardComponent,
    AlbumCardComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
