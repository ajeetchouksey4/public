import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { TodoModule } from './todo/todo.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';  


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    HomeModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
