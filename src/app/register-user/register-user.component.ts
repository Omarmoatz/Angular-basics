import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  user: any;

  constructor(){
    this.user = new User();
  }

  logData(){
    console.log("user", JSON.stringify(this.user));
    console.log("user", this.user);
  }
}
