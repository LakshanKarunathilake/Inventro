import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Asset } from 'src/models/Asset';
import { AssetService } from '../services/Asset/asset.service';

@Component({
  selector: 'app-new-asset',
  templateUrl: './new-asset.page.html',
  styleUrls: ['./new-asset.page.scss']
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
  wYears = [
    '1 Year',
    '2 Year',
    '3 Year',
    '4 Year',
    '5 Year',
    '6 Year',
    '8 Year',
    '10 Year'
  ];
  wMonths = ['1 Month', '2 Months', '5 Months', '8 Months', '10 Months'];
  wDays = ['7 Days', '10 Days', '14 Days', '21 Days'];
  constructor(private fb: FormBuilder, private assetService: AssetService) {
    this.newAsset = this.fb.group({
      assetCategory: ['', Validators.required],
      brandName: ['', Validators.required],
      boughtCompanyName: ['', Validators.required],
      buyingPrice: ['', [Validators.required]],
      warrantyStatus: ['', Validators.required],
      boughtDate: ['', Validators.required],
      description: ['', Validators.required],
      wYear: ['', Validators.required],
      wMonth: ['', Validators.required],
      wDay: ['', Validators.required],
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyContact: ['', Validators.required]
    });
  }

  ngOnInit() {}

  getErrorMessage = (controller: string) => {
    const formController = this.newAsset.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.newAsset.controls[control].invalid;
  }

  onSubmit = () => {
    const asset: Asset = this.newAsset.value;
    this.assetService.addNewAsset(asset);
  };
}
