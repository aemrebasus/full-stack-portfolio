import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'waitFor'
})
export class WaitForPipe implements PipeTransform {

  transform(value: any, wait: number): any {
    return new Promise((res, rej) => [
      setTimeout(() => {
        res(value);
      }, wait)
    ]);
  }

}
