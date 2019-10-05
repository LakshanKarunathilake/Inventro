import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-asset',
  templateUrl: './new-asset.page.html',
  styleUrls: ['./new-asset.page.scss'],
})
export class NewAssetPage implements OnInit {
  newAsset: FormGroup;
  categories = [
    'OTHER',
    'LAPTOP',
    'PC',
    'PROJECTOR',
    'UPS',
    'FURNITURE',
    'WATER FILTER',
    'MIKE',
    'SOUND SYSTEM',
    'DISPLAY'
  ];
  constructor(private fb: FormBuilder) {
    this.newAsset = this.fb.group({
      assetCategory: ['', Validators.required],
      brandName: ['', Validators.required],
      boughtCompanyName: ['', Validators.required],
      buyingPrice: ['', [Validators.required]],
      warrantyStatus: ['', Validators.required],
      boughtDate: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
