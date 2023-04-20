import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showInbox = false;
  showEmployee = false;
  showCandidate = false;
  showCalendar = true;

  rmUser = false;

  user: any = {
    user_id: '10105',
    user_role: 'RM'
  }

  userIntern: any = {
    user_id: '10131',
    user_role: 'Intern',
    rm: '10105'
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

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    let userData: any = localStorage.getItem('user')
    userData = JSON.parse(userData)
    
    
    this.user = userData

    this._employeeService.getEmployees()
      .subscribe(res => {
        this._employeeService.emp_list = res})
  }

  setRM() {
    localStorage.clear()
    localStorage.setItem('user',  JSON.stringify(this.user))
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

  logout() {
    localStorage.clear()
  }

}
