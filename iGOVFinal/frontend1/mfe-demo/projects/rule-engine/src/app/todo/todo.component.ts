import { Component, OnInit } from '@angular/core';
import { Todo1Service } from '../todo1.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  rule1:string = 'Rule1';
  rule2:string = 'Rule2';
  constructor(private todoService: Todo1Service) { }

  ngOnInit(): void {
    // this.todoService.getAll().subscribe(data => {
    //   console.log(data)
    // });
    //this.getAll();
  }

  // getRule1(){
  //   console.log("This is calling...");
  //   this.todoService.getRule1();
  // }

  getRule1(){
    this.todoService.getRule1().subscribe((data:any) => {
      this.rule1=data.body.id;  
    });
  }

  getRule2(){
    this.todoService.getRule2().subscribe((data:any) => {
      this.rule2=data.body.id;  
    });
  }

}
