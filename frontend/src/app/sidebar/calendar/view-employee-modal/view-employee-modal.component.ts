import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-view-employee-modal',
  templateUrl: './view-employee-modal.component.html',
  styleUrls: ['./view-employee-modal.component.css']
})
export class ViewEmployeeModalComponent implements OnInit {
  trainings = [{
    session: '',
    emp: ''
  }]

  constructor(private _calendarService: CalendarService) {}

  ngOnInit() {
    this._calendarService.getTrainingEmployees()
      .subscribe(data => {
        console.log(data)
        this.trainings = data
      })
  }
}
