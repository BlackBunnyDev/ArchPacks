import { Injectable } from '@angular/core';
import { InList } from './in-list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list: InList[] = [
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
        {
          id: 4,
          name: 'Python',
          // description: 'Learn Python'
        },
        {
          id: 5,
          name: 'Django',
          // description: 'Learn Django'
        },
      ],
    },
    {
      id: 2,
      name: 'In Progress',
      cards: [
        {
          id: 6,
          name: 'Redux',
          // description: 'Learn Redux'
        },
        {
          id: 7,
          name: 'RxJS',
          // description: 'Learn RxJS'
        },
      ],
    },
    {
      id: 3,
      name: 'Done',
      cards: [
        {
          id: 8,
          name: 'MongoDB',
          // description: 'Learn MongoDB'
        },
        {
          id: 9,
          name: 'MySQL',
          // description: 'Learn MySQL'
        },
      ],
    },
  ];
  constructor() {}
  getAllList(): InList[] => {
    return list;
  };
}
