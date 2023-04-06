import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarService } from 'src/app/calendar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTrainingModalComponent } from './add-training-modal/add-training-modal.component';
import { EditTrainingModelComponent } from './edit-training-model/edit-training-model.component';
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
      created_by: '',
      trainer: '',
      updated_by: ''
    }
  ]
  
  


  constructor(private _calendarService: CalendarService, private fb: FormBuilder, private dialogRef: MatDialog){ }

  ngOnInit() {
    this.getTraining()
  }

  displayForm() {
    let dialogRef = this.dialogRef.open(AddTrainingModalComponent, {
      width: '40%',
    })

    dialogRef.afterClosed().subscribe(result => {
      result ? this.getTraining() : console.log(result)
    })
  }

  

  getTraining() {
    this._calendarService.getTrainingSession()
      .subscribe(data => console.log(this.trainingSession = data))
  }
  

  

  displayEditform(sessionIndex: any) {
    let editDialog = this.dialogRef.open(EditTrainingModelComponent, {
      width : '40%', data: {session: this.trainingSession[sessionIndex]}
      
    })
    editDialog.afterClosed().subscribe(res => res ? this.getTraining() : console.log(res)
    )
  }

  
}
