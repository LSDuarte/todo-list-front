import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   todos: Todo[] = []
   form: FormGroup = new FormGroup({
     description : new FormControl('')
   });

   constructor(
     private service: TodoService
   ) {}

  submit() {
     console.log(this.form.value);
     const todo: Todo = { ...this.form.value}
     this.service
       .salvar(todo)
       .subscribe(savedTodo => {
         this.todos.push(savedTodo)
         this.form.reset();
       });
  }
}
