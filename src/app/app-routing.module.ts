import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { TododashboardComponent } from "./shared/components/tododashboard/tododashboard.component";
import { TodolistComponent } from "./shared/components/tododashboard/todolist/todolist.component";
import { TodoformComponent } from "./shared/components/tododashboard/todoform/todoform.component";


const routes : Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path : 'home',
        component: HomeComponent
    },
    {
        path: 'todo',
        component: TododashboardComponent,
        children: [
            {
                path: 'todoId',
                component: TodolistComponent
            },
            {
                path: 'todoId/editTodo',
                component:TodoformComponent
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})


export class AppRoutingModule{ }