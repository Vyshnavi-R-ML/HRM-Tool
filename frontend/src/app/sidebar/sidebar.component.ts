import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showInbox = true;
  showEmployee = false;
  showCandidate = false;
  showCalendar = false;

  rmUser = false;

  userRM: any = {
    user_id: '10105',
    user_role: 'RM'
  }

  userIntern: any = {
    user_id: '10131',
    user_role: 'Intern'
  }

  displayInbox() {
    this.showInbox = true;
    this.showEmployee = false;
    this.showCandidate = false;
    this.showCalendar = false;
  }
  displayEmployee() {
    this.showInbox = false;
    this.showEmployee = true;
    this.showCandidate = false;
    this.showCalendar = false;
  }
  displayCandidate() {
    this.showInbox = false;
    this.showEmployee = false;
    this.showCandidate = true;
    this.showCalendar = false;  
  }
  displayCalendar() {
    this.showInbox = false;
    this.showEmployee = false;
    this.showCandidate = false;
    this.showCalendar = true;
  }

  

  setRM() {
    localStorage.clear()
    localStorage.setItem('user',  JSON.stringify(this.userRM))
  }

  setIntern () {
    localStorage.clear()
    localStorage.setItem('user',  JSON.stringify(this.userIntern))
  }
  switchUser() {
    if(this.rmUser) {
      this.setRM()
    }
    else {
      this.setIntern()
    }
    this.rmUser = !this.rmUser
  }

}
