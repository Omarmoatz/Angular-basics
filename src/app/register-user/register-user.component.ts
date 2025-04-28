import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register-user',
  imports: [],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  user: any;

  constructor(){
    this.user = new User();
  }
}
