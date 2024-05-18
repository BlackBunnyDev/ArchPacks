import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Todo } from './todo';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todo: FormGroup = new FormGroup({
    id: new FormControl(),
    object: new FormControl(),
    complete: new FormControl(),
  });
  todoList: {
    objects: Todo[];
    completed: () => number;
    incompleted: () => number;
    completedPercent: () => number;
  } = {
    objects: [
      {
        id: 1,
        object: 'Learn Angular',
        complete: true,
      },
      {
        id: 2,
        object: 'Learn React',
        complete: false,
      },
      {
        id: 3,
        object: 'Learn Vue',
        complete: false,
      },
      {
        id: 4,
        object: 'Learn TypeScript',
        complete: false,
      },
      {
        id: 5,
        object: 'Learn Svelte',
        complete: false,
      },
      {
        id: 6,
        object: 'Learn Elm',
        complete: false,
      },
      {
        id: 7,
        object: 'Learn Functional Programming',
        complete: false,
      },
      {
        id: 8,
        object: 'Learn Kubernetes',
        complete: false,
      },
      {
        id: 9,
        object: 'Learn DevOps',
        complete: false,
      },
      {
        id: 10,
        object: 'Learn GraphQL',
        complete: false,
      },
    ],
    completed: function () {
      let count = 0;
      for (let i = 0; i < this.objects.length; i++) {
        if (this.objects[i].complete == true) {
          count++;
        }
      }
      return count;
    },
    incompleted: function () {
      let count = 0;
      for (let i = 0; i < this.objects.length; i++) {
        if (this.objects[i].complete == false) {
          count++;
        }
      }
      return count;
    },
    completedPercent: function () {
      let percent = (this.completed() / this.objects.length) * 100;
      console.log(percent)
      return percent;
    },
  };
  onSubmit() {
    if (this.todo.value.object != null) {
      // console.log(this.todo.value);
      this.todo.value.id = Math.round(Math.random() * 1000000);
      this.todo.value.complete = false;
      console.log(this.todo.value);
      this.todoList.objects.push(this.todo.value);
      this.todo.reset();
    }
  }
}
