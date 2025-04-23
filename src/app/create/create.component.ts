import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  @Output() eventEmitter = new EventEmitter<string>();

  addEvent(name:string, age:string):void{
    this.eventEmitter.emit(name);
  }


}
