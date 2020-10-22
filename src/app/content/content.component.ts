import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cloudy = [ 'Clouds',  'Mist' ,'Smoke' ,'Haze' ,'Dust' ,'Fog' ,'Sand' ,'Dust','Ash' ,'Squall' ,'Tornado']
  rainy = ['Drizzle', 'Rain','Thunderstorm']

  constructor() { }

  ngOnInit(): void {
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
}
