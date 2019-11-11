import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee/employee.service';
import { BookAsset } from 'src/models/BookAsset';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss']
})
export class RequestsPage implements OnInit {
  bookings: Observable<BookAsset[]>;
  requests: Observable<BookAsset[]>;
  constructor(private employee: EmployeeService) {
    this.bookings = this.employee.getBookings();
    this.requests = this.employee.getRequests();
    this.employee.getBookings().subscribe(data => console.log('data', data));
  }

  ngOnInit() {}
}
