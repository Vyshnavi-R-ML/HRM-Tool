import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  trainingStatus = [
    {
      employeeName: 'Tapash',
      department: 'Delivery',
      status: 'Online',
    },
    {
      employeeName: 'Kumar',
      department: 'Delivery',
      status: 'Offline ',
    },
    {
      employeeName: 'Deepan',
      department: 'Delivery',
      status: 'Online',
    }
    
  ]

  deleteEmp(empName: string){
    console.log(empName)
    var index: any;
    for(index in this.trainingStatus) {
      if (this.trainingStatus[index].employeeName == empName){
        this.trainingStatus.splice(index, 1)
      }
    }
  }
}
