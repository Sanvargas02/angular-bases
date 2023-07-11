import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Creamos una propiedad con los nombres de los Héroes
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string; // public deletedHero: string = '';

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
    //Usamos llaves para mostrar en consola como objeto / console.log({ deletedHero })
  }

}
