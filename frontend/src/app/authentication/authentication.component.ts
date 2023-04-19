import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder, private _authService: AuthService){}

  ngOnInit() {
    this.reqEmployees()
  }

  reqEmployees() {
    this._authService.getUsers()
      .subscribe(res => {
        const user = res.login.find((a:any) => {
          if(a.password === "124535sfasf2"){
            return a
          }
        })

        if(user) {
          console.log(user)
        }
      })
  }
}
