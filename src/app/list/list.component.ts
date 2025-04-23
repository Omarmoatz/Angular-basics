import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-list',
  imports: [CommonModule, DetailComponent, CreateComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items:any;
  details:any;
  show:boolean = false;

  constructor(){
    this.items = [
      {"name":"omar", "age":20},
      {"name":"ahmad", "age":30},
    ]

  }

  showDetails(data:string):void{
    this.details = data;
    this.show = true;
  }

  addItem(item:string){
    this.items.push(item)
  }



}
