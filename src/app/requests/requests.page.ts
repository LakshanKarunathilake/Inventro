import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee/employee.service';
import { BookAsset } from 'src/models/BookAsset';
import { Observable } from 'rxjs';
import { BreakDown } from 'src/models/BreakDown';
import { AssetService } from '../services/Asset/asset.service';
import { AuthenticateService } from '../services/Authenticate/authenticate.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss']
})
export class RequestsPage implements OnInit {
  requests: Observable<BookAsset[]>;
  breakDowns: Observable<BreakDown[]>;

  constructor(
    private employee: EmployeeService,
    private asset: AssetService,
    private auth: AuthenticateService
  ) {
    const { status } = this.auth.getUser();
    this.requests = this.employee.getRequests().pipe(
      map(val => {
        const filtered = [];
        return val.filter(value => {
          if (
            status === 'Asset Manager' &&
            !value.amTouched &&
            !value.dhTouched
          ) {
            return true;
          } else if (
            status === 'Department Head' &&
            !value.amTouched &&
            !value.dhTouched
          ) {
            return true;
          } else {
            return false;
          }
        });
      })
    );
    this.breakDowns = this.asset.getAllBreakDowns();

    this.requests.subscribe(data => {
      console.log('data', data);
    });
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
