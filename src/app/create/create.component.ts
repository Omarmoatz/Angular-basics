import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  items = {"name":"", "age":""}; 
  @Output() eventEmitter = new EventEmitter<any>();

  addEvent():void{
    this.items = {"name":this.items.name, "age":this.items.age}
    if(this.items.name == "" || this.items.age == ""){
      alert("Please fill all fields");
      return;
    } 
    this.eventEmitter.emit(this.items);
    console.log(this.items);
    this.resetForm();
    console.log(this.items);
    
  }

  resetForm(): void{
    this.items = {"name":"", "age":""};
  }

}
