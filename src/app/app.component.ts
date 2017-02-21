import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {GetDataService} from './get-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'app works!';
  constructor(
    //@Inject('data') private data
   private data:GetDataService,
   @Inject('hostURL') private hostURL
    ){

  }
  postData(index,event){
    console.log(event);
    this.data.updateCityData(index,event);
    }
}
