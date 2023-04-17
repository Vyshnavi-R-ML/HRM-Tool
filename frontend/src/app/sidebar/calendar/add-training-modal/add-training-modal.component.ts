import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-add-training-modal',
  templateUrl: './add-training-modal.component.html',
  styleUrls: ['./add-training-modal.component.css']
})
export class AddTrainingModalComponent {
  trainingForm = this.fb.group({
    training_name: [''],
    trainer: [''],
    session_date: [''],
    session_time: [''],
  })

  constructor(private _calendarService: CalendarService, private fb: FormBuilder){}


  // POST Form Data to backend
  addTraining() {
    this._calendarService.sendData = this.trainingForm.value

    this._calendarService.addTrainingSession()
      .subscribe(res => {
        console.log(res)
      })
    // this._calendarService.addTrainingSession(
    //   this.trainingForm.value.trainingName,
    //   this.trainingForm.value.trainer,
    //   this.trainingForm.value.sessionDate,
    //   this.trainingForm.value.sessionTime
    // ).subscribe(res => {
    //   console.log(res)
    // })
    
  }
}
