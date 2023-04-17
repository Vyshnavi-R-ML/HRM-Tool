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

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data)
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
