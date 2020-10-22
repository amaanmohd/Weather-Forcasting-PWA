import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  WeatherData:any;
  sunsetTime;
  showInput: boolean =false;
  switchInput = '';
  city:string ;
  condition;
  constructor() { }

  ngOnInit(): void {
    this.getLocalStorage()
    console.log(this.WeatherData)
  }

  toggleSwitch(){
    this.switchInput = 'edit'
  }

  OnInput(event: any) {
    this.city = event.target.value;
    this.getWeatherData(this.city)
    this.switchInput = 'weather';
    }

    getLocalStorage(){
      if(localStorage.getItem('WeatherData')==null){
        this.WeatherData = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData = JSON.parse(localStorage.getItem('WeatherData'));
        this.switchInput = 'weather';
      }
    }
    getWeatherData(city){
      let api='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=656e6411f16bc453a68ffc8614adf9ce'
      fetch(api)
      .then(response => response.json())
      .then(data => {
        this.setWeatherData(data)
        console.log(data);
      })
      .catch(error => { 
        this.switchInput = 'error'
      })


    }
  
    setWeatherData(data){
      this.WeatherData= data
      let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000)
      this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
      this.condition = this.WeatherData.weather[0].main
      this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
      this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
      this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
      this.WeatherData.temp_Feels_Like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
      localStorage.setItem('WeatherData',
        JSON.stringify(this.WeatherData)
      )
    }

}
