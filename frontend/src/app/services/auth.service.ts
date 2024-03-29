import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url: string = "/assets/data/users.json"

  constructor(private http: HttpClient) { }

  public isAuthenticated = (): any => {
    const userData : any = localStorage.getItem('user');
    const userToken = JSON.parse(userData)    

    if (userToken?.token) {
      return true
    }  
    else return false
  }

  getUsers = (): Observable<any> => {
    return this.http.get<any>(this._url)
  }
}
