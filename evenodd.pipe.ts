import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenodd'
})
export class EvenoddPipe implements PipeTransform {

  transform(num: number): string {
    if(num%2==0){
      return "Even";
    }else{
      return "Odd";
    }
  }

}
