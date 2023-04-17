import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  // user: any = {
  //   user_id: '10131',
  //   user_role: 'Intern'
  // }

  user: any = {
    user_id: '10105',
    user_role: 'RM'
  }

  ngOnInit() {
    localStorage.setItem('user',  JSON.stringify(this.user))
  }
}
