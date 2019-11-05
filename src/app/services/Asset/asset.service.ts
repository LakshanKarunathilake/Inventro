import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from 'src/models/Asset';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private http: HttpClient) {}

  addNewAsset = (asset: Asset) => {
    const url = `${environment.backendURL}asset/add`;
    this.http
      .post<Asset>(url, asset)
      .toPromise()
      .then(data => console.log('data', data))
      .catch(error => console.log('error', error));
  };

  getAllAssets = () => {
    const url = `${environment.backendURL}asset/all`;
    this.http
      .get(url)
      .toPromise()
      .then(data => console.log('data', data))
      .catch(error => console.log('error', error));
  };
}
