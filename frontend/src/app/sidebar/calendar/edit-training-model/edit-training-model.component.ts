import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CalendarService } from 'src/app/calendar.service';
import { CalendarComponent } from '../calendar.component';

@Component({
  selector: 'app-edit-training-model',
  templateUrl: './edit-training-model.component.html',
  styleUrls: ['./edit-training-model.component.css']
})
export class EditTrainingModelComponent {


  trainingForm = this.fb.group({
    sessionId: [''],
    trainingName: [''],
    trainer: [''],
    sessionDate: [''],
    sessionTime: [''],
    createdBy:['']
  })

  session:any
  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private _calendarService: CalendarService, private fb: FormBuilder, private dialogRef: MatDialog){
    this.session = data
   }
  
  ngOnInit(id: any) {
    console.log(this.session);
    
    
    let current_session = this.session.session

    this.trainingForm.setValue({
      sessionId: <any> current_session?.session_id,
      trainingName: <any> current_session?.training_name,
      sessionDate: <any> current_session?.session_date,
      sessionTime: <any> current_session?.session_time,
      trainer: <any> current_session?.trainer,
      createdBy: <any> current_session?.created_by
    })
}

updateTraining() {
  this._calendarService.updateTrainingSession( 
    this.trainingForm.value.sessionId,
    this.trainingForm.value.trainingName,
    this.trainingForm.value.sessionDate,
    this.trainingForm.value.sessionTime,
    this.trainingForm.value.trainer,
    this.trainingForm.value.createdBy)
  .subscribe(res => console.log(res)
  )
}
}
