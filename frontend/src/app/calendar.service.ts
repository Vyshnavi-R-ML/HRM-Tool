import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private _url: string = "http://127.0.0.1:8000/training/";

  httpsOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    body: null,
  }


  constructor(private http: HttpClient) { }

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

  updateTrainingSession(session_id: any, training_name: any, session_date: any, session_time: any, trainer: any, updated_by: any) {
    const putData = new FormData();

    putData.append('session_id', session_id)
    putData.append('training_name', training_name)
    putData.append('session_date', session_date)
    putData.append('session_time', session_time)
    putData.append('trainer_id',trainer)
    putData.append('updated_by', updated_by)
    console.log(putData);
    

    return this.http.put<any>(this._url + 'session/', putData)

  } 

  deleteTrainingSession(id: any) {
    this.httpsOptions.body = id;

    return this.http.delete<any>(this._url + 'session/', this.httpsOptions)
  }
}
