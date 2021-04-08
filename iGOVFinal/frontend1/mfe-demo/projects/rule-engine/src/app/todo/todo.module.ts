import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  HttpClientModule } from '@angular/common/http';
import { Todo1Service } from '../todo1.service';



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      },
    ]),
  ],
  exports: [
    TodoComponent
  ],
  providers: [Todo1Service]
})
export class TodoModule { }
