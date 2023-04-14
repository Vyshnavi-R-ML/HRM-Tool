import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarService } from 'src/app/calendar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTrainingModalComponent } from './add-training-modal/add-training-modal.component';
import { ViewEmployeeModalComponent } from './view-employee-modal/view-employee-modal.component';
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
  user: any = {
    user_id: '',
    user_role: '',
  }

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
  searchText = ''; 


  constructor(private _calendarService: CalendarService, private fb: FormBuilder, private dialogRef: MatDialog){ }

  ngOnInit() {
    this.getTraining()
    let userData: any = localStorage.getItem('user')
    userData = JSON.parse(userData)
    
    this.user = userData
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
      editDialog.afterClosed().subscribe(editTraining => {
        if(editTraining) {
          this._calendarService.updateTrainingSession( 
          editTraining.sessionId,
          editTraining.trainingName,
          editTraining.sessionDate,
          editTraining.sessionTime,
          editTraining.trainer,
          editTraining.createdBy)
          .subscribe(res => {
            console.log(res)
            this.trainingSession = res
          })
        }
      }   
      )
  }

  deleteTraining(index: any) {
    this._calendarService.deleteTrainingSession(this.trainingSession[index].session_id)
      .subscribe(res => res ? this.trainingSession.splice(index, 1) : console.log(res))
  }


  // Nominate employee for Training Session
  sendNomRequest(empID: any, sessionID: any) {
    console.log(empID, sessionID)
    const from_emp = 10378
    const to_emp = 10105

    const data = {
      session_id: sessionID,
      nominated_by: from_emp,
      emp_id: to_emp,
      status: null
    }
    this._calendarService.nominateEmp(data)
      .subscribe(res => console.log(res))
  }
  
}
