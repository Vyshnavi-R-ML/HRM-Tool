import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showInbox = false;
  showEmployee = false;
  showCandidate = false;
  showCalendar = true;

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
}
