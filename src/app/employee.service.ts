import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  employeeList: Employee[] = [{name: 'Swastik', address: '10 Downing Street', mobile: 7299942232},
  {name: 'Swastik', address: '10 Downing Street', mobile: 7299942232}];
  constructor() { }

  getEmployeeList(): Employee[] {
    return this.employeeList;
  }
}
