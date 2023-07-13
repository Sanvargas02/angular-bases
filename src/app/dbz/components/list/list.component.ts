import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // Para solucionar el problema del undefined se puede:
  // 1. Dejar el parámetro como opcional id? y no ejecutar la función con un if (!id) return
  // 2. Otra opción es decir en el template de list que siempre se pasa un argumento con id Ej. id!
  // 3. Otra opción es dejar una condición en el argumento en el que se pasa el arg pedido o algo vacío (id || '')
  onDeleteCharacter(id?: string):void {
    if (!id) return;
    // Esto nunca se llama si no se tiene un id
    this.onDelete.emit(id);
  }


}
