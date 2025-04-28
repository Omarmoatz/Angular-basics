import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { TrimPipe } from './trim.pipe';
import { RegisterUserComponent } from './register-user/register-user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, CommonModule, RegisterUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '                my-angular-app                     ';
  description = 'This is a simple angular app';
  newAddress: string;
  counter: number;
  items = ["item1", "item2", "item3"];

  constructor() {
    this.newAddress = "Cairo, Nasr city ....";
    this.counter = 0;
  }

  addItem(value: string): void {
    if (this.items.includes(value)) {
      alert("Item already exists");
      return;
    }    
    this.items.push(value);
  }

  getNowDateTime(): Date {
    return new Date();
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }


}
