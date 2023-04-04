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

  deleteEmp(i: any){
    this.employees.splice(i, 1)
  }
}
