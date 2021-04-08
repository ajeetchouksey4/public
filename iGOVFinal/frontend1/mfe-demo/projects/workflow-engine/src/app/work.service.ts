import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  
  constructor(private http: HttpClient) {
  }

  getWork1(): Observable<any> {
    let header = new HttpHeaders();
    header.set('Content-Type', 'text/plain');

    console.log("calling work1() ");
    return this.http.get<any>('http://127.0.0.1:8080/workflowEngine/work1', {headers:header, observe:'response'});
  }

  getWork2(): Observable<any> {
    let header = new HttpHeaders();
    header.set('Content-Type', 'text/plain');

    console.log("calling work2() ");
    return this.http.get<any>('http://127.0.0.1:8080/workflowEngine/work2', {headers:header, observe:'response'});
  }

}
