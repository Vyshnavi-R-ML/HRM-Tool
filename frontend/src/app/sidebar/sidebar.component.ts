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
  showCalendar = true;


  user: any


  displayInbox = () => {
    this.showInbox = true;
    this.showEmployee = false;
    this.showCalendar = false;
  }
  displayEmployee = () => {
    this.showInbox = false;
    this.showEmployee = true;
    this.showCalendar = false;
  }
  displayCalendar = () => {
    this.showInbox = false;
    this.showEmployee = false;
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

  logout = () => {
    localStorage.clear()
  }

}
