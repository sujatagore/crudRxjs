import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shared/module/todo.interface';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor(
    private _uuidService : UuidService,
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
  }

  onTodoAdd(todoInput : HTMLInputElement){
    let todoObj : ITodo = {
        todoItem : todoInput.value,
        todoId : this._uuidService.uuid()
    }
    todoInput.value = '';
    this._todoService.addTodo(todoObj)
  }
}
