import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  trainingStatus = [
    {
      managerName: 'Tapash',
      department: 'Delivery',
      training: 'Golang',
      duration: '20 days',
      deadline: '5 march',
      status: 'Online',
    },
    {
      managerName: 'Kumar',
      department: 'Delivery',
      training: 'Python',
      duration: '25 days',
      deadline: '15 march',
      status: 'Offline ',
    },
    {
      managerName: 'Deepan',
      department: 'Delivery',
      training: 'Django',
      duration: '22 days',
      deadline: '18 march',
      status: 'Online',
    }
    
  ]
  showTraining = true;
  showReplies = false;
  showRequest = false;

  displayTraining() {
    this.showTraining = true;
    this.showReplies = false;
    this.showRequest = false;
  }
  displayReplies() {
    this.showTraining = false;
    this.showReplies = true;
    this.showRequest = false;
  }
  displayRequest() {
    this.showTraining = false;
    this.showReplies = false;
    this.showRequest = true;
  }
}
