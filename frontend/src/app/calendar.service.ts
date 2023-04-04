import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private _url: string = "http://127.0.0.1:8000/training/session/";

  constructor(private http: HttpClient) { }

  getTrainingSession(): Observable<any> {
    return this.http.get<any>(this._url)
  }

  addTrainingSession(training_name: any, trainer: any, session_date: any, session_time: any) {
    const postData = new FormData();

    postData.append('training_name', training_name)
    postData.append('trainer', trainer)
    postData.append('session_date', session_date)
    postData.append('session_time', session_time)
    postData.append('created_by', "10105")
    
    return this.http.post<any>(this._url, postData)
  }
}
