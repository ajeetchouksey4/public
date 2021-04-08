import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-wfhome',
  templateUrl: './wfhome.component.html',
  styleUrls: ['./wfhome.component.scss']
})
export class WfhomeComponent implements OnInit {

  work1:string = 'work1';
  work2:string = 'work2';
  constructor(private workService: WorkService) { }

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

  getWork1(){
    this.workService.getWork1().subscribe((data:any) => {
      this.work1=data.body.id;  
    });
  }

  getWork2(){
    this.workService.getWork2().subscribe((data:any) => {
      this.work2=data.body.id;  
    });
  }

}
