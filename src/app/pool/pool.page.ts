import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.page.html',
  styleUrls: ['./pool.page.scss']
})
export class PoolPage implements OnInit {
  loaded = false;
  constructor() {}

  ngOnInit() {}

  selectAssetsRelatedToCategory = () => {
    this.loaded = !this.loaded;
  };
}
