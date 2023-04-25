import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent  {

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  
  dataValue: any
  
  constructor(private fb: FormBuilder, private _authService: AuthService, private router : Router){}
  
  

  login() {
    this._authService.getUsers()
      .subscribe(res => {
        const user = res.login.find((data:any) => {        
          return data.email === this.authForm.value.email && data.password === this.authForm.value.password
        })

        
        if(user) {
          localStorage.setItem('user',JSON.stringify(user))
          this.router.navigateByUrl('/dashboard')
        }
        else {
          alert('Enter correct credentials')
        }
      })
  }
}
