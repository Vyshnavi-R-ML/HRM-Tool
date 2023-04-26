import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees = [
    {
      emp_id: '',
      emp_name: '',
      emp_category: '',
      rm: ''
    },    
  ]
  user: any
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    let userData: any = localStorage.getItem('user')
    userData = JSON.parse(userData)
    
    
    this.user = userData
    this.employees = this._employeeService.emp_list
  }

  confirmBtn : any

  deleteEmp(i: any){
    this.confirmBtn = confirm('Do you want to delete?')
    if(this.confirmBtn == true) {
    this._employeeService.deleteEmployee(this.employees[i].emp_id)
    .subscribe(res => res ? this.employees.splice(i, 1) : console.log(res)
    )
      
    }
  }
}
