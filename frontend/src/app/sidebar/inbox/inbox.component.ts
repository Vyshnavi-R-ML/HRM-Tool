import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  user: any = {}
  nominationStatus: any = []
  empList: any = []
  session: any = {}
  
  showTraining = true;
  showReplies = false;
  showRequest = false;

  constructor(private _calendarService: CalendarService, private _employeeService: EmployeeService) {}

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

    this.empList = this._employeeService.emp_list
    this.session = this._calendarService.session
    this._calendarService.getNominations(userData.user_id)
      .subscribe(data => {
        this.nominationStatus = data
        this.displayNames()
      })
    }
    
    
    displayNames() {
      for(let i in this.nominationStatus) {
        let displayEmployeeName = this.empList.find((data:any) => {
          return data.emp_id == this.nominationStatus[i].nominated_by
        })        
        console.log(displayEmployeeName);
        
        this.nominationStatus[i].emp_name = displayEmployeeName.emp_name
      }

      for(let i in this.nominationStatus){
        let displayTrainingName = this.session.find((data: any) =>{ 
          return data.session_id == this.nominationStatus[i].session   
        }) 
        this.nominationStatus[i].training_name = displayTrainingName.training_name       
      }
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
      .subscribe(res => {
        this.nominationStatus = res
        this.displayNames()
      })
  }

  rejectNomRequest(empIndex:any) {
    let data = {
      nominated_by : this.nominationStatus[empIndex].nominated_by,
      status: false,
      session_id : this.nominationStatus[empIndex].session,
      emp_id : this.user.user_id,
      rejected_by : '10349',
      reason : 'Already in a training'
    }
    this._calendarService.acceptNomRequest(data)
    .subscribe(res =>{
       this.nominationStatus = res
       this.displayNames()
      })
  }

}
