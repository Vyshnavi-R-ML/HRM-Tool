import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "http://127.0.0.1:8000/employee/";

  public emp_list: any = [
    
  ]

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'}),
    body : {}
  }
  getEmployees = (): Observable<any> => {
    return this.http.get<any>(this._url)
  }

  deleteEmployee = (id: any) => {
    this.httpOptions.body = {
      emp_id : id
    }
    return this.http.delete<any>(this._url, this.httpOptions)
  }
}
