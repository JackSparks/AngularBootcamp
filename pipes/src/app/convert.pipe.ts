import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  // Take whatever arguments are present and stick them into an array
  // transform(value: any, ...args: any[]): any {
    transform(value: any, targetUnits:string): any {
    
    if(!value){
      return ""
    }

    switch(targetUnits){
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');
    }

    // return value * 1.60934;
  }

}
