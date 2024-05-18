import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {
    [
      {
        id: 1,
        name: 'To Do',
        cards: [
          {
            id: 1,
            name: 'Angular 9',
            // description: 'Learn Angular 9'
          },
          {
            id: 2,
            name: 'Vue',
            // description: 'Learn Vue'
          },
          {
            id: 3,
            name: 'React',
            // description: 'Learn React'
          },
        ]
      }
    ]
   }
}
