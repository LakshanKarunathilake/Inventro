import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from 'src/models/Asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  hostURL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  addNewAsset = (asset: Asset) => {
    const subURl = 'asset/add';
    this.http
      .post<Asset>(this.hostURL + subURl, asset)
      .toPromise()
      .then(data => console.log('data', data))
      .catch(error => console.log('error', error));
  };
}
