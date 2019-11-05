import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/models/Employee';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss']
})
export class AllUsersPage implements OnInit {
  employees: Observable<Employee[]>;
  filteredEMployees: Observable<Employee[]>;
  constructor(private employee: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employee.getAllEmployees();
    this.filteredEMployees = this.employee.getAllEmployees();
  }

  filterUsers = val => {
    console.log('val', val);
    if (val !== '') {
      console.log('in');
      this.employees = this.employees.pipe(
        tap((emp: Employee[]) => {
          console.log('emp', emp);
          emp.filter(element => {
            console.log('element', element);
            return (
              element.firstname.includes(val) || element.lastname.includes(val)
            );
          });
        })
      );
    } else {
      this.employees = this.filteredEMployees;
    }
  };
}
