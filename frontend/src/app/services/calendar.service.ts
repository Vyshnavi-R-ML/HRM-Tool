import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  private _url: string = "http://127.0.0.1:8000/training/";


  constructor(private http: HttpClient) { }

  public session: any = {
    session_id : '',
    training_name : '',
    trainer : '',
    created_date : '',
    created_time : '',
    updated_by : ''
    
  }

  getTrainingSession(): Observable<any> {
    return this.http.get<any>(this._url + 'session/')
  }

  getTrainingEmployees(): Observable<any> {
    return this.http.get<any>(this._url)
  }

  addTrainingSession(training_name: any, trainer: any, session_date: any, session_time: any) {
    const postData = new FormData();

    postData.append('training_name', training_name)
    postData.append('trainer', trainer)
    postData.append('session_date', session_date)
    postData.append('session_time', session_time)
    postData.append('created_by', "10105")
    
    return this.http.post<any>(this._url + 'session/', postData)
  }

  updateTrainingSession(data: any) {
    return this.http.put<any>(this._url + 'session/', data)
  } 
}
