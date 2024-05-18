import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todo: FormGroup = new FormGroup({
    id: new FormControl(),
    object: new FormControl(),
    complete: new FormControl(),
  });
  todoList: Todo[] = [
    {
      id: 1,
      object: 'Learn Angular',
      complete: false,
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
    }
  ]
  onSubmit() {
    if (this.todo.value.object != null) {
      // console.log(this.todo.value);
      this.todo.value.id = Math.round(Math.random() * 1000);
      this.todo.value.complete = false;
      console.log(this.todo.value);
      this.todoList.push(this.todo.value);
      this.todo.reset();
    }
  }
}
