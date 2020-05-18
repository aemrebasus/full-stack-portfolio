import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  projects() {
    return [
      { name: 'First Project', pills: [1, 5, 6] },
      { name: 'Second Project', pills: [1, 5, 6] },
      { name: 'Third Project', pills: [1, 5, 6] },
    ];
  }


  project() {
    return {
      headers: ['ID', 'title', 'sumamry', 'status', 'asignee'],
      items: [
        ['1', 'Create Something', 'Do this get this make this', 'todo', 'Ahmet Emrebas'],
        ['2', 'Create Something', 'Do this get this make this', 'todo', 'Ahmet Emrebas'],
        ['3', 'Create Something', 'Do this get this make this', 'todo', 'Ahmet Emrebas'],
        ['4', 'Create Something', 'Do this get this make this', 'todo', 'Ahmet Emrebas'],
        ['5', 'Create Something', 'Do this get this make this', 'todo', 'Ahmet Emrebas'],
        ['6', 'Create Something', 'Do this get this make this', 'todo', 'Ahmet Emrebas'],
      ]
    }
  }
}
