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
  
  
  constructor(private fb: FormBuilder, private _authService: AuthService, private router : Router){}
  
  

  login() {
    this._authService.getUsers()
      .subscribe(res => {
        const user = res.login.find((data:any) => {        
          if(data.email === this.authForm.value.email && data.password === this.authForm.value.password){
            console.log(data);
            
            localStorage.setItem('user',JSON.stringify(data))
            this.router.navigateByUrl('/dashboard')
          }
        })

        if(user) {
          console.log(user)
        }
      })
  }
}
