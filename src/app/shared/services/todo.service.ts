import { Injectable } from '@angular/core';
import { ITodo } from '../module/todo.interface';
import { Observable, of } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArr : Array<ITodo> = [
    {
      todoItem : 'Angular',
      todoId : '1'
    }
  ]

  constructor(
    private _snackbar : SnackbarService
  ) { }

  fetchAllTodo():Observable<ITodo[]>{
    return of(this.todoArr)
  }

  addTodo(newTodo : ITodo){
    this.todoArr.push(newTodo)
    this._snackbar.openSnackBar(`New Todo Item ${newTodo.todoItem} is Added Successfully!!!`)
  }

  //Method to fetch single TODO Object using ID >>
  
  // fetchTodo(id : string):Observable<ITodo[]>{
  //   let todo = this.todoArr.find(t => t.todoId === id)
  //   return of(this.todoArr)
  // }
}
