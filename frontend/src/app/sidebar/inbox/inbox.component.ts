import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  trainingStatus = {
    first: {
      managerName: 'Tapash',
      department: 'Delivery',
      training: 'Golang',
      duration: '20 days',
      deadline: '5 march',
      status: 'Online',
    },
    second: {
      managerName: 'Kumar',
      department: 'Delivery',
      training: 'Python',
      duration: '25 days',
      deadline: '15 march',
      status: 'Offline ',
    },
    third: {
      managerName: 'Deepan',
      department: 'Delivery',
      training: 'Django',
      duration: '22 days',
      deadline: '18 march',
      status: 'Online',
    }
    
  }
}
