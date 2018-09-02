import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Subscription, Observable, Subject } from 'rxjs';

@Injectable()
export class EmployeeService {
  private employeeList: Employee[] = [];

  private employeeListUpdated = new Subject<Employee[]>();

  constructor() {  }

  getEmployeeUpdatedListener() {
    return this.employeeListUpdated.asObservable();
  }

  getEmployeeList() {
    this.employeeList = [{id: 1, name: 'Swastik', address: '10 Downing Street', mobile: 7299942232},
    {id: 2, name: 'Soujanya', address: '10 Downing Street', mobile: 7299942232}];
    this.employeeListUpdated.next([...this.employeeList]);
    return this.employeeList;
  }

  deleteEmployee(id: number) {
    this.employeeList = this.employeeList.filter((employee) => employee.id !== id);
    this.employeeListUpdated.next([...this.employeeList]);
  }

  saveEmployee(employee: Employee) {
    this.employeeList.push(employee);
    this.employeeListUpdated.next([...this.employeeList]);
  }
}
