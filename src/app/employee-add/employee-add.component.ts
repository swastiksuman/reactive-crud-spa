import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      address: new FormControl(),
      mobile: new FormControl()
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      console.log('Invalid');
    } else {
      this.employeeService.saveEmployee({id: this.employeeForm.get('id').value, name: this.employeeForm.get('name').value,
                          address: this.employeeForm.get('address').value, mobile: this.employeeForm.get('mobile').value});
    }
  }

  reset() {
    this.employeeForm.reset();
  }

}
