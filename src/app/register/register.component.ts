import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-register',
  imports: [FormsModule,ListComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  user:any;
  email : string;
  phone1 : number;
  phone2 : number;
  @Input() address: string;
  @Input() count: number;

  @Output() eventEmitter = new EventEmitter<string>();
  


  constructor(){
    this.email = "info@gmail.com"
    this.phone1 = 1033594673
    this.phone2 = 1011093980
    this.address = "Mansoura, dikernis"
    this.count = 0

    this.user = {
      name: "",
      age: "",
      address: ""
    }

  }

  addNewItem(value: string): void {
    this.eventEmitter.emit(value);
  }

  register(): void{
    console.log("user" + JSON.stringify(this.user));
    
  }

  ngOnInit(): void {
    console.log("in on init>>>>>>>");
  }
  
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    console.log("ngAfterContentInit >>>>>>>>>>>>>>>>");

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    console.log("ngAfterContentChecked >>>>>>>>>>>>>>>>");
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    console.log("ngAfterViewChecked >>>>>>>>>>>>>>>>");

    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log("ngAfterViewInit >>>>>>>>>>>>>>>>");
    
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log("ngDoCheck >>>>>>>>>>>>>>>>");
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log("ngOnChanges >>>>>>>>>>>>>>>>");
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log("ngOnDestroy >>>>>>>>>>>>>>>>");
    
  }

}
