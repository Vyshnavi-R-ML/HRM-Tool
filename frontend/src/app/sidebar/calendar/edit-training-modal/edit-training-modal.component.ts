import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-edit-training-modal',
  templateUrl: './edit-training-modal.component.html',
  styleUrls: ['./edit-training-modal.component.css']
})
export class EditTrainingModalComponent {


  trainingForm = this.fb.group({
    session_id: [''],
    training_name: [''],
    trainer : [''],
    session_date: [''],
    session_time: [''],
    updated_by:['']
  })

  constructor(private _calendarService: CalendarService, private fb: FormBuilder){
    
   }
  
  ngOnInit() {
    
    let current_session = this._calendarService.session
  
    
    this.trainingForm.setValue({
      training_name: <any> current_session.training_name,
      session_id: <any> current_session.session_id,
      trainer: <any> current_session.trainer,
      session_date: <any> current_session.session_date,
      session_time: <any> current_session.session_time,
      updated_by: <any> current_session.updated_by
    })
}

updateSession() {
  this._calendarService.session = this.trainingForm.value

}

}
