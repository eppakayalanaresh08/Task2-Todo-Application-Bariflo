import { Component } from '@angular/core';
import { TodoService } from '../todo.service';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})



export class TodoListComponent{
  todos: any[] = [];

 constructor(private ts:TodoService){}


 ngOnInit(): void{
  this.todos=this.ts.todoList;
 }

 removeTodo(index:number){
 this.ts.deleteTodo(index)
 }
 
}
