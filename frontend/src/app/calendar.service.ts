import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private _url: string = environment.apiUrl

  httpsOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    body: {},
  }

  public sendData: any = {
    session_id: '', 
    training_name: '', 
    session_date: '', 
    session_time: '', 
    trainer: '', 
    created_by: ''
  }

  constructor(private http: HttpClient) { }

  getTrainingSession(): Observable<any> {
    return this.http.get<any>(this._url + 'training/session/')
  }

  getTrainingEmployees(): Observable<any> {
    return this.http.get<any>(this._url + 'training/')
  }


  addTrainingSession() {
    this.sendData.created_by = 10105
    this.httpsOptions.body = this.sendData
    console.log(this.sendData)
    
    return this.http.post<any>(this._url + 'training/session/', this.httpsOptions.body)
  }

  updateTrainingSession(session_id: any, training_name: any, session_date: any, session_time: any, trainer: any, updated_by: any) {
    console.log(this.sendData);
    
    this.httpsOptions.body = this.sendData

    return this.http.put<any>(this._url + 'training/session/', this.httpsOptions.body)

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

  //Get Nomination
  getNominations(data:any) {
    return this.http.get<any>(this._url + `nomination/?emp_id=${data}&session_id`)
    // return this.http.get<any>(this._url + `nomination/?emp_id=10378&session_id`)

  }

  //Accept Nom Request
  acceptNomRequest(data:any) {
    return this.http.put<any>(this._url + `nomination/`, data)
  }
}
