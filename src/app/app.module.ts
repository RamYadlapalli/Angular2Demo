import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import {GetDataService} from './get-data.service'

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetDataService,{provide:'hostURL',useValue:'http://localhost:4200'}],
// providers: [{provide: 'data',useClass:GetDataService}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
