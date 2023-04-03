import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarService } from 'src/app/calendar.service';
/**
 * Calendar Component Displays Training Sessions and 
 * Creates Training Session
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  trainingSession = [
    {
      session_id: '',
      training_name: '',
      session_date: '',
      session_time: '',
      created_by: ''
    }
  ]

  trainingForm = this.fb.group({
    trainingName: [''],
    trainer: [''],
    sessionDate: [''],
    sessionTime: [''],
  })


  showForm = false;

  constructor(private _calendarService: CalendarService, private fb: FormBuilder){ }

  ngOnInit() {
    this._calendarService.getTrainingSession()
      .subscribe(data => console.log(this.trainingSession = data))
  }


  clickForm(){
    this.showForm = !this.showForm
  }


  // POST Form Data to backend
  addTraining() {
    this._calendarService.addTrainingSession(
      this.trainingForm.value.trainingName,
      this.trainingForm.value.trainer,
      this.trainingForm.value.sessionDate,
      this.trainingForm.value.sessionTime
    )
  }
}
