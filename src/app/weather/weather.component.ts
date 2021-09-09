import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() weatherData: DATA[];

  public cityName: string;

  public cityDetail: any;

  public showNoResult = false;

  public hideDeatils = false;

  constructor() { }

  ngOnInit(): void {
  }

  getData(): void {
    if(this.cityName) {
        let foundCity = this.weatherData.find(city => city.name.toLocaleLowerCase() == this.cityName.toLocaleLowerCase());
        if(foundCity) {
          this.cityDetail = foundCity;
          this.hideDeatils = true;
          this.showNoResult = false;
        } else {
          this.hideDeatils= false;
          this.showNoResult = true;
        }
    } else {
      this.hideDeatils= false;
      this.showNoResult = false;
    }
  }

}

interface DATA {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
