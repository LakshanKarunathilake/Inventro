import { Component, OnInit } from '@angular/core';
import { AssetService } from '../services/Asset/asset.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.page.html',
  styleUrls: ['./pool.page.scss']
})
export class PoolPage implements OnInit {
  loaded = false;
  constructor(private asset: AssetService) {
    this.asset.getAllAssets();
  }

  ngOnInit() {}

  selectAssetsRelatedToCategory = () => {
    this.loaded = !this.loaded;
  };
}
