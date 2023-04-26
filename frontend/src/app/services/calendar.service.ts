import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  private _url: string = environment.apiUrl;


  constructor(private http: HttpClient) { }

  public session: any = {}

  httpsOptions = {

     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    
     body: {},
    
    }

  getTrainingSession(): Observable<any> {
    return this.http.get<any>(this._url + 'training/session/')
  }

  getTrainingEmployees(): Observable<any> {
    return this.http.get<any>(this._url + 'training/')
  }

  addTrainingSession() {
    this.session.created_by = 10105
    return this.http.post<any>(this._url + 'training/session/', this.session)
  }

  updateTrainingSession(data: any) {
    return this.http.put<any>(this._url + 'training/session/', data)
  } 
  deleteTrainingSession(id: any) {
     this.httpsOptions.body = {
     session_id: id
    };
     console.log(id)
     return this.http.delete<any>(this._url + 'training/session/', this.httpsOptions)
    }
    
    //Nominate Employee
     nominateEmp(data:any) {
     return this.http.post<any>(this._url + 'nomination/', data)
    }
    
    //Get Nomination Requests and Replies
     getNominations(data:any) {
     return this.http.get<any>(this._url + `nomination/?emp_id=${data}`)
    }
    
     //Accept Nom Request
     acceptNomRequest(data:any) {
     return this.http.put<any>(this._url + `nomination/`, data)
    }
}
