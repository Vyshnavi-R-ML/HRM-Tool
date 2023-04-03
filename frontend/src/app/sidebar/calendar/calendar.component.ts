import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  trainingSession = [
    {
      sessionID: 7001,
      trainingName: 'Django',
      sessionDate: '2023-03-28',
      sessionTime: '12:00:00',
      createdBy: 10105
  }
]
}
