import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  user: any = {

  }

  nominationStatus: any = [
    {}
  ]
  showTraining = true;
  showReplies = false;
  showRequest = false;

  constructor(private _calendarService: CalendarService) {}

  displayTraining() {
    this.showTraining = true;
    this.showReplies = false;
    this.showRequest = false;
  }
  displayReplies() {
    this.showTraining = false;
    this.showReplies = true;
    this.showRequest = false;
  }
  displayRequest() {
    this.showTraining = false;
    this.showReplies = false;
    this.showRequest = true;
  }


  //Get nominations
  ngOnInit() {
    let userData: any = localStorage.getItem('user')
    userData = JSON.parse(userData)
    
    this.user = userData
    this._calendarService.getNominations(userData.user_id)
      .subscribe(data => {
        this.nominationStatus = data
      })

  }

  // Manager as User
  acceptNomRequest(empIndex:any) {
    let data = {
      nominated_by:this.nominationStatus[empIndex].nominated_by,
      status: true,
      session_id: this.nominationStatus[empIndex].session,
      emp_id: this.user.user_id
    }
    
    this._calendarService.acceptNomRequest(data)
      .subscribe(res => this.nominationStatus = res)
  }

  rejectNomRequest(empIndex:any) {
    let data = {
      nominated_by : this.nominationStatus[empIndex].nominated_by,
      status: false,
      session_id : this.nominationStatus[empIndex].session,
      rejected_by : '10349',
      reason : 'Already in a training'
    }
    this._calendarService.acceptNomRequest(data)
    .subscribe(res => res)
  }

}
