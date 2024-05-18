import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  onSubmit() {
    if (this.todo.value.object != "") {

      // console.log(this.todo.value);
      this.todo.value.id = Math.round(Math.random() * 1000);
      this.todo.value.complete = false;
      console.log(this.todo.value);
      this.todo.reset();
    }
  }
}
