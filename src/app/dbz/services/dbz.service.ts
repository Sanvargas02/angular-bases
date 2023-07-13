
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character):void {

    const newCharacter: Character = { id: uuid(), ...character } // ... el Spread nos copia todos los datos

    this.characters.push(newCharacter);
  }

  //Remover el elemento basados en el index
  // onDeleteCharacter( index: number ) {
  // this.characters.splice(index, 1);
  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
