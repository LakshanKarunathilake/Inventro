import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/models/Employee';
import { map } from 'rxjs/operators';

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

  filterUsers = (val: string) => {
    if (val !== '') {
      this.filteredEMployees = this.employees.pipe(
        map((emp: Employee[]) => {
          return emp.filter(element => {
            return (
              element.firstname.toLowerCase().includes(val.toLowerCase()) ||
              element.lastname.toLowerCase().includes(val.toLowerCase())
            );
          });
        })
      );
    } else {
      this.filteredEMployees = this.employees;
    }
  };

  blockUser = nic => {
    this.employee.blockUser(nic);
  };

  unblockUser = nic => {
    this.employee.unblockUser(nic);
  };
}
