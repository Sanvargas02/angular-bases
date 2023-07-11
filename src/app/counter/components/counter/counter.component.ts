import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter }} </h3>

    <button (click)="increaseBy(1)" >+1</button>
    <button (click)="resetCounter()" >Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent{

  //Propiedad
  public counter: number = 10;

  //Método
  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }

}
