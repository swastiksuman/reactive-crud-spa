import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeList: Employee[];

  constructor(private employeeService: EmployeeService) {
    console.log();
  }

  ngOnInit() {
    console.log('On init');
    this.employeeService.getEmployeeUpdatedListener().subscribe((employees: Employee[]) => {
      console.log(employees);
      this.employeList = employees;
    });
    this.employeeService.getEmployeeList();
  }

  onDelete(id: number) {
    this.employeeService.deleteEmployee(id);
  }

  refresh() {
    this.employeeService.getEmployeeList();
  }
}
