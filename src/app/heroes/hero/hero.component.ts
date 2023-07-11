import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  //Creamos primero las properties
  public name: string = 'ironman';
  public age: number = 45;

  // Se pueden crear propertes/Métodos de Clase Getter y Setter
  //Se vé como una propiedad pero es un Método
  get capitalizeName():string {
    return this.name.toUpperCase(); //toUpperCase - Método de JS
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  //Métodos para cambiar la Datos

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 20;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

  //TODO: tengo que crea una clase set


}
