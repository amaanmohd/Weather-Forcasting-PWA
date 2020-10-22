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
  switchInput1 = '';
  switchInput2 = '';
  switchInput3 = '';
  switchInput4 = '';
  switchInput5 = '';
  switchInput6 = '';
  switchInput7 = '';
  switchInput8 = '';
  switchInput9 = '';

  city:string ;
  condition;
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = { 
        1:{ main : {},
      weather: [{main:''}]}
    }
    this.getLocalStorage()
    // this.WeatherData = { 
    //   1:{ main : {},
    // weather: [{main:''}]},
    //  2: { main : {},
    // weather: [{main:''}]},
    //  3: { main : {},
    // weather: [{main:''}]},
    // 4: { main : {},
    // weather: [{main:''}]},
    // 5:{ main : {},
    // weather: [{main:''}]},
    // 6:{ main : {},
    // weather: [{main:''}]},
    // 7:{ main : {},
    // weather: [{main:''}]},
    // 8:{ main : {},
    // weather: [{main:''}]},
    // 9:{ main : {},
    // weather: [{main:''}]}
    // }
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

  
  toggleSwitch(id){
    if(id==1){
      this.switchInput1 = 'edit';
    }else if(id==2){
      this.switchInput2 = 'edit';
    }else if (id==3) {
      this.switchInput3 = 'edit';
    }else if(id==4){
      this.switchInput4 = 'edit';
    }else if (id==5) {
      this.switchInput5 = 'edit';
    }else if(id==6){
      this.switchInput6 = 'edit';
    }else if (id==7) {
      this.switchInput7 = 'edit';
    }else if(id==8){
      this.switchInput8 = 'edit';
    }else if (id==9) {
      this.switchInput9 = 'edit';
    }
  }
  
  

  OnInput(event: any , id) {
    this.city = event.target.value;
    this.getWeatherData(this.city, id)
    console.log(id)
    
    }

    getLocalStorage(){
      if(localStorage.getItem('1')==null){
        this.WeatherData[1] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[1] = JSON.parse(localStorage.getItem('1'));
        this.switchInput1 = 'weather';
      }

      if(localStorage.getItem('2')==null){
        this.WeatherData[2] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[2] = JSON.parse(localStorage.getItem('2'));
        this.switchInput2 = 'weather';
      }

      if(localStorage.getItem('3')==null){
        this.WeatherData[3] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[3] = JSON.parse(localStorage.getItem('3'));
        this.switchInput3 = 'weather';
      }

      if(localStorage.getItem('4')==null){
        this.WeatherData[4] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[4] = JSON.parse(localStorage.getItem('4'));
        this.switchInput4 = 'weather';
      }

      if(localStorage.getItem('5') == null){
        this.WeatherData[5] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[5] = JSON.parse(localStorage.getItem('5'));
        this.switchInput5 = 'weather';
      }

      if(localStorage.getItem('6')==null){
        this.WeatherData[6] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[6] = JSON.parse(localStorage.getItem('6'));
        this.switchInput6 = 'weather';
      }

      if(localStorage.getItem('7')==null){
        this.WeatherData[7] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[7] = JSON.parse(localStorage.getItem('7'));
        this.switchInput7 = 'weather';
      }

      if(localStorage.getItem('8')==null){
        this.WeatherData[8] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[8] = JSON.parse(localStorage.getItem('8'));
        this.switchInput8 = 'weather';
      }

      if(localStorage.getItem('9')==null){
        this.WeatherData[9] = {
          main : {},
          weather: [{main:''}]
        }
      }else {
        this.WeatherData[9] = JSON.parse(localStorage.getItem('9'));
        this.switchInput9 = 'weather';
      }
    }
    
    getWeatherData(city,id){
      let api='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=656e6411f16bc453a68ffc8614adf9ce'
      fetch(api)
      .then(response => response.json())
      .then(data => {
        this.setWeatherData(data, id)
        if(id==1){
          this.switchInput1 = 'weather';
        }else if(id==2){
          this.switchInput2 = 'weather';
        }else if (id==3) {
          this.switchInput3 = 'weather';
        }else if(id==4){
          this.switchInput4 = 'weather';
        }else if (id==5) {
          this.switchInput5 = 'weather';
        }else if(id==6){
          this.switchInput6 = 'weather';
        }else if (id==7) {
          this.switchInput7 = 'weather';
        }else if(id==8){
          this.switchInput8 = 'weather';
        }else if (id==9) {
          this.switchInput9 = 'weather';
        }
        console.log(data);
      })
      .catch((error) => {
            if(id==1){
              this.updateWeatherData(id)
              this.switchInput1 = 'error';
            }else if(id==2){
              this.updateWeatherData(id)
              this.switchInput2 = 'error';
            }else if (id==3) {
              this.updateWeatherData(id)
              this.switchInput3 = 'error';
            }else if(id==4){
              this.updateWeatherData(id)
              this.switchInput4 = 'error';
            }else if (id==5) {
              this.updateWeatherData(id)
              this.switchInput5 = 'error';
            }else if(id==6){
              this.updateWeatherData(id)
              this.switchInput6 = 'error';
            }else if (id==7) {
              this.updateWeatherData(id)
              this.switchInput7 = 'error';
            }else if(id==8){
              this.updateWeatherData(id)
              this.switchInput8 = 'error';
            }else if (id==9) {
              this.updateWeatherData(id)
              this.switchInput9 = 'error';
            }
      })


    }
  
    updateWeatherData(id){
      this.WeatherData[id] = {
        main : {},
        weather: [{main:''}]
      }
      localStorage.removeItem(id)
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
      localStorage.setItem(id,
        JSON.stringify(this.WeatherData[id])
      )
      console.log(this.WeatherData)
    }

}
