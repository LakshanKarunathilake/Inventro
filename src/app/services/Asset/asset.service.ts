import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from 'src/models/Asset';
import { environment } from 'src/environments/environment';
import { BookAsset } from 'src/models/BookAsset';
import { SwalService } from '../swal/swal.service';
import { BreakDown } from 'src/models/BreakDown';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(
    private http: HttpClient,
    private swal: SwalService,
    private afs: AngularFirestore
  ) {}

  addNewAsset = (asset: Asset) => {
    const url = `${environment.backendURL}asset/add`;
    return this.http.post<Asset>(url, asset).toPromise();
  };

  getAllAssets = () => {
    const url = `${environment.backendURL}asset/all`;
    return this.http.get<Asset[]>(url);
  };

  placeRequest = (request: BookAsset) => {
    const url = `${environment.backendURL}assign/request/add `;
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
        this.afs
          .collection('BookAssetNotification')
          .add(request)
          .then(() => {
            console.log('Booking added to firestore');
          })
          .catch(err => {
            console.log('err', err);
          });
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
      .then(() => {
        this.swal.viewSuccessMessage(
          'Success',
          'Break down informed successfully'
        );
        this.afs
          .collection('BreakDownAsset')
          .add(breakDown)
          .then(() => {
            console.log('Breakdown updated in firestore');
          })
          .catch(err => {
            console.log('err', err);
          });
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
    const url = `${environment.backendURL}asset/delete`;
    this.http
      .post(url, { id })
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

  getAllBreakDowns = () => {
    const url = `${environment.backendURL}breakdown/all`;
    return this.http.get<BreakDown[]>(url);
  };

  releaseBreakDown = assetId => {
    const url = `${environment.backendURL}breakdown/release`;
    this.http
      .get(url, { params: { assetId } })
      .toPromise()
      .then(data => {
        console.log('data', data);
        this.swal.viewSuccessMessage('Success', 'Asset Successfully Released');
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Asset release failure please try again'
        );
      });
  };
}
