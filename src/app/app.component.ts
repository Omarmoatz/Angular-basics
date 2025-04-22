import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { TrimPipe } from './trim.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, CommonModule, TrimPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '                my-angular-app                     ';
  description = 'This is a simple angular app';
  newAddress: string;

  constructor() {
    this.newAddress = "Cairo, Nasr city ....";
  }

  getNowDateTime(): Date{
    return new Date();
  }

}
