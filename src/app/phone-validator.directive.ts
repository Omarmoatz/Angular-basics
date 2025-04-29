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
    throw new Error('Method not implemented.');
  }
  
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
