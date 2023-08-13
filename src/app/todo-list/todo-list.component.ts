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





// num1:number=10
// num2:number=2

// op:string=""

// name:number=1000

// person={
// 'id':1,
// "name":"Naresh",
// "age":21
// }

// date=new Date()

// percentage=0.98

 
}
