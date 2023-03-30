import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  trainingStatus = {
    managerName: 'Tapash',
    department: 'Delivery',
    training: 'Golang',
    duration: '20 days',
    deadline: '5 march',
    status: 'Accepted',
  }
}
