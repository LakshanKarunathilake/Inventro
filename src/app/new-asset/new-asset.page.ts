import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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

}
