import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/models/Asset';

@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  @Input() asset: Asset;
  constructor() {}

  ngOnInit() {}
}
