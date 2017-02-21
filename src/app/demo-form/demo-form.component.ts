import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-demo-form',
  template: `
    <div>
    <input type="text" #myTxtRef value={{cityData.Index}} [(ngModel)]="cityData.Name" [ngClass]="{mousedown: isMouseDown}" (mousedown)="isMouseDown=true" (mouseup)="isMouseDown=false;">
     
      <button (click)="processedData.emit({text:cityData.Name})">click</button> 
    </div>
  `,
  styles: [
    `
    :host{
      display: block;
    }
    *{
      font-family: monospace;
    }
    .mousedown{
      border: 12px solid grey;
    }
    `    
  ]
  
})
export class DemoFormComponent implements OnInit {

isMouseDown;

@Input() cityData;
@Output() processedData = new EventEmitter();

clickFunc(event, value){
  console.log(event); //To captre mouse events
  console.log(value);
}
  constructor() { }

  ngOnInit() {
  }

}
