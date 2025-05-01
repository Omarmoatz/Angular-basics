import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true
    }
  ]
})
export class PhoneValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let pattern = /[1-9]{1}[0-9]{9}/;

    console.log(pattern);
    
    console.log("control------------------------------------");
    console.log("control", control);
    console.log("control.value.length", control.value.length);
    console.log("control.value.match(pattern)", control.value.match(pattern));
    

    if(control.value && control.value.length < 10 && control.value.match(pattern)){
      
      console.log("wrong xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      return {"InvalidPhoneNum": false};
    }

    return null;

  }
  
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
