import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-rm-reqnom-modal',
  templateUrl: './rm-reqnom-modal.component.html',
  styleUrls: ['./rm-reqnom-modal.component.css']
})
export class RmReqnomModalComponent implements OnInit{
  rmReq : any
  constructor(private _calendarService : CalendarService, private fb: FormBuilder) {}
  trainingForm = this.fb.group({
    emp_id : ['']
  })
  ngOnInit() {
    this.rmReq = this._calendarService.session  
  }
 
  submitRMRequest() {
    this.rmReq.emp_id = this.trainingForm.value.emp_id
    this.rmReq = this._calendarService.session
    this._calendarService.session = this.rmReq    
  }
  
}
