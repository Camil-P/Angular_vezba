import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnDestroy {

  subscription : Subscription;
  vreme : any;
  pretraga : string = "";
  constructor(private weatherService : WeatherService) { }

  pretrazi() : void{
    this.subscription = this.weatherService.search(this.pretraga).subscribe(x => this.vreme = x);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
