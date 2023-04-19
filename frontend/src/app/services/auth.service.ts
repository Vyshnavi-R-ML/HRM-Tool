import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url: string = "/assets/data/users.json"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this._url)
  }
}
