import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {


  auth = this.fb.group({
    uname: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder){}
}
