import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpClient) { }

  getData(path: string) {
    return new Promise((res, rej) => {
      res([
        { id: '', name: '', lastName: '' },
        { id: '1', name: 'Ahmet Emrebas' },
        { id: '20', name: 'Muhittin Kara' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },

        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
        { id: '3', name: 'Cevdet Acikgoz' },
      ])
    })

  }
}
