import { Component} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent  {
  todoInput=""
constructor(private ts:TodoService){}

ngOnInit(): void{

}

addTask(){
  this.ts.addTodo(this.todoInput)
  
  this.todoInput=""
}

restForm(){
 this.todoInput=""
}

}
