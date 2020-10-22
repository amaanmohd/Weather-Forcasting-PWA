import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cloudy = [ 'Clouds',  'Mist' ,'Smoke' ,'Haze' ,'Dust' ,'Fog' ,'Sand' ,'Dust','Ash' ,'Squall' ,'Tornado']
  rainy = ['Drizzle', 'Rain','Thunderstorm']
  WeatherData:any = {};
  sunsetTime;
  showInput: boolean =false;
  switchInput = '';
  city:string ;
  condition;
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = { 1:{ main : {},
    weather: [{main:''}]}, 2: { main : {},
    weather: [{main:''}]}, 3: { main : {},
    weather: [{main:''}]}
    }
  }

  getUrl(condition) {
    if(condition == 'Clear'){
      return "url(../../assets/images/sunny.jpg)" ;
    }
    else if(this.cloudy.includes(condition)){
      return "url(../../assets/images/cloudy.jpg)" ;
    }else if(this.rainy.includes(condition)){
      return "url(../../assets/images/rainy.jpg)" ;
    }else if(condition== 'Snow'){
      return "url(../../assets/images/snow.jpg)" ;
    }else{
      return 'none'
    }
    
  }

  
  toggleSwitch(){
    this.switchInput = 'edit'
  }

  OnInput(event: any , id) {
    this.city = event.target.value;
    this.getWeatherData(this.city, id)
    console.log(id)
    this.switchInput = 'weather';
    }

    // getLocalStorage(){
    //   if(localStorage.getItem('WeatherData')==null){
    //     this.WeatherData = {
    //       main : {},
    //       weather: [{main:''}]
    //     }
    //   }else {
    //     this.WeatherData = JSON.parse(localStorage.getItem('WeatherData'));
    //     this.switchInput = 'weather';
    //   }
    // }
    getWeatherData(city,id){
      let api='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=656e6411f16bc453a68ffc8614adf9ce'
      fetch(api)
      .then(response => response.json())
      .then(data => {
        this.setWeatherData(data, id)
        console.log(data);
      })
      .catch(error => { 
        this.switchInput = 'error'
      })


    }
  
    setWeatherData(data ,id){

      this.WeatherData[id]= data
      let sunsetTime = new Date(this.WeatherData[id].sys.sunset * 1000)
      this.WeatherData[id].sunset_time = sunsetTime.toLocaleTimeString();
      this.condition = this.WeatherData[id].weather[0].main
      this.WeatherData[id].temp_celcius = (this.WeatherData[id].main.temp - 273.15).toFixed(0);
      this.WeatherData[id].temp_min = (this.WeatherData[id].main.temp_min - 273.15).toFixed(0);
      this.WeatherData[id].temp_max = (this.WeatherData[id].main.temp_max - 273.15).toFixed(0);
      this.WeatherData[id].temp_Feels_Like = (this.WeatherData[id].main.feels_like - 273.15).toFixed(0);
      // localStorage.setItem('WeatherData',
      //   JSON.stringify(this.WeatherData)
      // )
      console.log(this.WeatherData)
    }

}
