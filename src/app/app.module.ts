import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { TodoformComponent } from './shared/components/tododashboard/todoform/todoform.component';
import { TodolistComponent } from './shared/components/tododashboard/todolist/todolist.component';
import { TododashboardComponent } from './shared/components/tododashboard/tododashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './shared/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    TododashboardComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
