import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/models/Employee';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss']
})
export class AllUsersPage implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private employee: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employee.getAllEmployees();
  }
}
