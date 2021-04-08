import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Todo1Service {

  constructor(private http: HttpClient) {
  }

  getRule1(): Observable<any> {
    let header = new HttpHeaders();
    header.set('Content-Type', 'text/plain');

    console.log("calling getAll() ");
    return this.http.get<any>('http://127.0.0.1:8080/ruleEngine/rule1', {headers:header, observe:'response'});
  }

  getRule2(): Observable<any> {
    let header = new HttpHeaders();
    header.set('Content-Type', 'text/plain');

    console.log("calling getAll() ");
    return this.http.get<any>('http://127.0.0.1:8080/ruleEngine/rule2', {headers:header, observe:'response'});
  }

}
