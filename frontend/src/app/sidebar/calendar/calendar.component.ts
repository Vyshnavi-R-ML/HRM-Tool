import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarService } from 'src/app/calendar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTrainingModalComponent } from './add-training-modal/add-training-modal.component';
import { ViewEmployeeModalComponent } from './view-employee-modal/view-employee-modal.component';
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
  searchText = '';

  constructor(private _calendarService: CalendarService, private fb: FormBuilder, public dialogRef: MatDialog){ }

  ngOnInit() {
    this.getTraining()
  }

  displayForm() {
    let dialogRef = this.dialogRef.open(AddTrainingModalComponent, {
      width: '40%',
    })

    dialogRef.afterClosed().subscribe(result => {
      result ? this.getTraining() : console.log('else')
    })
  }

  displayEmployees() {
    let dialogRef = this.dialogRef.open(ViewEmployeeModalComponent, {
      width: '40%',
    })
  }

  

  getTraining() {
    this._calendarService.getTrainingSession()
      .subscribe(data => console.log(this.trainingSession = data))
  }

}
