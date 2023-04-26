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
  nominationRequests: any = []
  nominationReplies: any = []
  empList: any = []
  session: any = {}
  
  showRequests = true;
  showReplies = false;

  constructor(private _calendarService: CalendarService, private _employeeService: EmployeeService) {}

  displayRequests() {
    this.showRequests = true;
    this.showReplies = false;
  }
  displayReplies() {
    this.showRequests = false;
    this.showReplies = true;
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
        this.nominationRequests = data.nom_data_to
        this.nominationReplies = data.nom_data_from
        this.displayNames()
      })
    }
    
    
    displayNames() {
      for(let i in this.nominationRequests) {
        let displayEmployeeName = this.empList.find((data:any) => {
          return data.emp_id == this.nominationRequests[i].nominated_from
        })        
        console.log(displayEmployeeName);
        
        this.nominationRequests[i].emp_name = displayEmployeeName.emp_name
      }

      for(let i in this.nominationRequests){
        let displayTrainingName = this.session.find((data: any) =>{ 
          return data.session_id == this.nominationRequests[i].session   
        }) 
        this.nominationRequests[i].training_name = displayTrainingName.training_name       
      }
  }

  // Manager as User
  acceptNomRequest(empIndex:any) {
    let data = {
      nominated_from:this.nominationRequests[empIndex].nominated_from,
      status: true,
      session_id: this.nominationRequests[empIndex].session,
      nominated_to: this.user.user_id
    }
    
    this._calendarService.acceptNomRequest(data)
      .subscribe(res => {
        this.nominationRequests = res
        this.displayNames()
      })
  }

  rejectNomRequest(empIndex:any) {
    let data = {
      nominated_from : this.nominationRequests[empIndex].nominated_from,
      status: false,
      session_id : this.nominationRequests[empIndex].session,
      nominated_to : this.user.user_id,
      rejected_by : '10349',
      reason : 'Already in a training'
    }
    this._calendarService.acceptNomRequest(data)
    .subscribe(res =>{
       this.nominationRequests = res
       this.displayNames()
      })
  }

}
