import { Component } from '@angular/core';

import { Todo } from './todo'; 
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = [];
  
  constructor(private todoDataService: TodoDataService){}

  onToggleTodoComplete(todo: Todo){
    this.todoDataService.toggleTodoComplete(todo)
  }

  onRemoveTodo(todo: Todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get Todos(){
    console.log(this.todoDataService.getAllTodos())
    return this.todoDataService.getAllTodos();
  }
}
