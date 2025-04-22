import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('before trim', value);
    
    const data = value.replace(/^\s+|\s+$/g, '');
    console.log('after trim', data);

    return data;
  }

}
