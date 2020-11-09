import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from './home.guard';
import { HomeComponent } from './home/home.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent, canActivate:[HomeGuard], children:
    [
      {path:'', component: SearchComponent}, 
      {path:'weather', component:WeatherComponent},
      {path:'korisnici', component:KorisniciComponent}
    ]},
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
