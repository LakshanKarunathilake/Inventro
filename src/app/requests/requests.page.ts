import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee/employee.service';
import { BookAsset } from 'src/models/BookAsset';
import { Observable } from 'rxjs';
import { BreakDown } from 'src/models/BreakDown';
import { AssetService } from '../services/Asset/asset.service';
import { AuthenticateService } from '../services/Authenticate/authenticate.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss']
})
export class RequestsPage implements OnInit {
  bookings: Observable<BookAsset[]>;
  requests: Observable<BookAsset[]>;
  breakDowns: Observable<BreakDown[]>;

  constructor(
    private employee: EmployeeService,
    private asset: AssetService,
    private auth: AuthenticateService
  ) {
    this.bookings = this.employee.getBookings();
    this.requests = this.employee.getRequests();
    this.breakDowns = this.asset.getAllBreakDowns();
  }

  ngOnInit() {}

  approve = id => {
    this.employee.approveBooking(id);
  };

  reject = id => {
    this.employee.assignReject(id);
  };

  isAM = () => {
    return this.auth.getUser().status === 'Asset Manager';
  };

  release = assetId => {
    this.asset.releaseBreakDown(assetId);
  };
}
