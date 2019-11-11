import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from 'src/models/Asset';
import { environment } from 'src/environments/environment';
import { BookAsset } from 'src/models/BookAsset';
import { SwalService } from '../swal/swal.service';
import { BreakDown } from 'src/models/BreakDown';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private http: HttpClient, private swal: SwalService) {}

  addNewAsset = (asset: Asset) => {
    const url = `${environment.backendURL}asset/add`;
    return this.http.post<Asset>(url, asset).toPromise();
  };

  getAllAssets = () => {
    const url = `${environment.backendURL}asset/all`;
    return this.http.get<Asset[]>(url);
  };

  placeRequest = (request: BookAsset) => {
    const url = `${environment.backendURL}request/add `;
    this.http
      .post<BookAsset>(url, request)
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage('Success', 'Request placed successfully');
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Request placement failure please try again'
        );
      });
  };

  placeBook = (request: BookAsset) => {
    const url = `${environment.backendURL}assign/book/add `;
    this.http
      .post<BookAsset>(url, request)
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage('Success', 'Booking placed successfully');
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Booking placement failure please try again'
        );
      });
  };

  placeBreakDown = (breakDown: BreakDown) => {
    const url = `${environment.backendURL}breakdown/add `;

    this.http
      .post(url, breakDown)
      .toPromise()
      .then(data => {
        this.swal.viewSuccessMessage(
          'Success',
          'Break down informed successfully'
        );
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Sorry try again with valid asset ID'
        );
      });
  };

  deleteAsset = id => {
    const url = `${environment.backendURL}asset/delete/id `;
    this.http
      .delete(url)
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage('Succes', 'Asset Deleted successfully');
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Asset deletion failure make sure the asset resides in the database'
        );
      });
  };
}
