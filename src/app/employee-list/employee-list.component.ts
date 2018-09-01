import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employeList: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeList = this.employeeService.getEmployeeList();
  }

}
