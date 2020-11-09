import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ammodule } from './ammodule';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component'
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    WeatherComponent,
    KorisniciComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ammodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
