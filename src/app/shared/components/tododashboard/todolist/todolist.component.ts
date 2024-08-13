import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shared/module/todo.interface';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoData !: Array<ITodo>

  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchAllTodo()
        .subscribe((res) =>{
            this.todoData = res
        })
  }

  onTodoRemove(){

  }

}
