import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarService } from 'src/app/services/calendar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTrainingModalComponent } from './add-training-modal/add-training-modal.component';
import { ViewEmployeeModalComponent } from './view-employee-modal/view-employee-modal.component';
import { EditTrainingModalComponent } from './edit-training-modal/edit-training-modal.component';
import { RmReqnomModalComponent } from './rm-reqnom-modal/rm-reqnom-modal.component';
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
  confirmBtn : any;

  constructor(private _calendarService: CalendarService, private fb: FormBuilder, private dialogRef: MatDialog){ }

  ngOnInit() {
    this.getTraining()
    let userData: any = localStorage.getItem('user')
    userData = JSON.parse(userData)
    
    this.user = userData
  }

  displayForm = () => {
    let dialogRef = this.dialogRef.open(AddTrainingModalComponent, {
      width: '40%',
    })

    dialogRef.afterClosed().subscribe(result => {
      result ? this.getTraining() : console.log('else')

    })
  }

  displayEmployees = () => {
    let dialogRef = this.dialogRef.open(ViewEmployeeModalComponent, {
      width: '40%',
    })
    
    dialogRef.afterClosed().subscribe(result => {
      result ? this.getTraining() : console.log(result)
    })
  }

  

  getTraining = () => {
    this._calendarService.getTrainingSession()
      .subscribe(data => {
          this._calendarService.session = data
        this.trainingSession = data
      })
  }
  

  

  displayEditform = (sessionIndex: any) => {
      this._calendarService.session = this.trainingSession[sessionIndex]
      
      let editDialog = this.dialogRef.open(EditTrainingModalComponent, {
        width : '40%'
        
      })
      editDialog.afterClosed().subscribe(res => {
        if(res)
        {
          this._calendarService.updateTrainingSession(this._calendarService.session)
          .subscribe(res => this.trainingSession = res)
        }
      }
      )
  }

  deleteTraining = (index: any) => {
    this.confirmBtn = confirm('Do you want to delete?')
    if(this.confirmBtn == true){
      this._calendarService.deleteTrainingSession(this.trainingSession[index].session_id)
        .subscribe(res => res ? this.trainingSession.splice(index, 1) : console.log(res))
    }
  }


  // Nominate employee for Training Session
  sendEmpNomRequest = (sessionID: any)  => {
    const from_emp = this.user.user_id
    const to_emp = this.user.rm_id
    console.log(to_emp);
    
    const data = {
      session_id: sessionID,
      nominated_from: from_emp,
      nominated_to: to_emp,
      status: null
    }
    this._calendarService.nominateEmp(data)
      .subscribe(res => console.log(res))
  }
  rmRequest: any = {}

  sendRMNomRequest = (...data: any) => {
    
    this.rmRequest.from_emp = this.user.user_id
    this.rmRequest.session_id = data[0]
    this.rmRequest.training_name = data[1]
    this._calendarService.session = this.rmRequest
    
    let dialogRef = this.dialogRef.open(RmReqnomModalComponent, {
      width : '40%'
    })

    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        
        const data = {
          nominated_from : this._calendarService.session.from_emp,
          session_id : this._calendarService.session.session_id,
          nominated_to : this._calendarService.session.emp_id,
          status : null
        }
        this._calendarService.nominateEmp(data).subscribe(res => console.log(res)
        )
      }
    }
    )
  }
  
}
