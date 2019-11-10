import { Component, OnInit } from '@angular/core';
import { AssetService } from '../services/Asset/asset.service';
import { Observable } from 'rxjs';
import { Asset } from 'src/models/Asset';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.page.html',
  styleUrls: ['./pool.page.scss']
})
export class PoolPage implements OnInit {
  loading = false;
  assets: Observable<Asset[]>;
  filteredAssets: Observable<Asset[]>;
  constructor(private asset: AssetService) {
    this.assets = this.asset.getAllAssets();
    this.filteredAssets = this.asset.getAllAssets();
  }

  ngOnInit() {}

  filterAssets = (val: string) => {
    console.log('val', val);
    if (val !== '') {
      console.log('in');
      this.filteredAssets = this.assets.pipe(
        map((emp: Asset[]) => {
          console.log('emp', emp);
          return emp.filter(element => {
            console.log('element', element);
            return element.assetcategory
              .toLowerCase()
              .includes(val.toLowerCase());
          });
        })
      );
    } else {
      this.filteredAssets = this.assets;
    }
  };
}
