import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CalendarService } from 'src/app/calendar.service';

@Component({
  selector: 'app-edit-training-model',
  templateUrl: './edit-training-model.component.html',
  styleUrls: ['./edit-training-model.component.css']
})
export class EditTrainingModelComponent {


  trainingForm = this.fb.group({
    session_id: [''],
    training_name: [''],
    trainer: [''],
    session_date: [''],
    session_time: [''],
    updated_by:['']
  })

  constructor(private _calendarService: CalendarService, private fb: FormBuilder){
    
   }
  
  ngOnInit() {
    
    let current_session = this._calendarService.session
    
    this.trainingForm.setValue({
      session_id: <any> current_session.session_id,
      training_name: <any> current_session.training_name,
      session_date: <any> current_session.session_date,
      session_time: <any> current_session.session_time,
      trainer: <any> current_session.trainer,
      updated_by: <any> current_session.updated_by
    })
}

updateSession() {
  this._calendarService.session = this.trainingForm.value
}

}
