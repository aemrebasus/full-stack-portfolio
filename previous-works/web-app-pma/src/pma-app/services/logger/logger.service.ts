import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private log(message: string, code?: number) {
    const err = new Error(message.concat(`\nError Code= (${code})`));
    console.error(err);
    if (!environment.production) {
      alert(err.message);
    }
  }

  error(message: string, code?: number) {
    this.log(message, -1);
  }

  info(message: string, code?: number) {
    this.log(message, 0);
  }

}
