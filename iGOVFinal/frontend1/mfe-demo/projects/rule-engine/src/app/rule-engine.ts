import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';  
import { Injectable } from '@angular/core';

@Injectable()
export class RuleEngine {
  
    
  private baseUrl = 'http://localhost:8080/ruleEngine/';  
  
  constructor(private http:HttpClient) { }  
  
  getRule1(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'rule1');  
  }  
  
 
}
