import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Asset } from 'src/models/Asset';
import { AssetService } from '../services/Asset/asset.service';
import { SwalService } from '../services/swal/swal.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-new-asset',
  templateUrl: './new-asset.page.html',
  styleUrls: ['./new-asset.page.scss']
})
export class NewAssetPage implements OnInit {
  commonFieldsGroup: FormGroup;
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
    '0 Year',
    '1 Year',
    '2 Year',
    '3 Year',
    '4 Year',
    '5 Year',
    '6 Year',
    '8 Year',
    '10 Year'
  ];
  wMonths = [
    '0 Month',
    '1 Month',
    '2 Months',
    '5 Months',
    '8 Months',
    '10 Months'
  ];
  wDays = ['0 Days', '7 Days', '10 Days', '14 Days', '21 Days'];
  locations = [
    'Head Office',
    'IT Department',
    'HR Department',
    'Finance Department',
    'Front Table',
    'Store Room',
    'Lobby'
  ];
  computerBrands = ['HP', 'DELL', 'ASUS', 'MSI', 'APPLE', 'ACER', 'LENOVO'];
  capacitys = ['1 TB', '2 TB', '3 TB', '4 TB'];
  rams = ['2 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB', '32 GB'];
  processors = ['Core i7', 'Core i5', 'Core i3'];

  projectorBrands = ['HP', 'SAMSUNG', 'CASIO', 'ACER', 'LENOVO'];
  projectorCategory = ['LCD', 'CRT', 'LED', 'DLP'];

  furnitureBrands = [
    'DAMRO',
    'NILKAMAL',
    'NISACO',
    'DAMBULLA FURNITURE',
    'ARPICO'
  ];
  furnitureCategory = ['OFFICE TABLE', 'OFFICE CHAIR', 'CUPBOARDS', 'SOFA'];

  otherCategory = ['TELEVISION', 'SOUND SYSTEM', 'UPS', 'ROUTERS'];

  computerFormGroup: FormGroup;
  projectorFormGroup: FormGroup;
  furnitureFormGroup: FormGroup;
  otherFormGroup: FormGroup;

  specialFormGroup: FormGroup;
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  constructor(
    private fb: FormBuilder,
    private assetService: AssetService,
    private swal: SwalService
  ) {
    this.commonFieldsGroup = this.fb.group({
      assetcategory: ['', Validators.required],
      buyingPrice: ['', [Validators.required]],
      warrantyStatus: ['', Validators.required],
      boughtDate: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      years: ['', Validators.required],
      months: ['', Validators.required],
      days: ['', Validators.required],
      boughtCompanyName: ['', Validators.required],
      boughtCompanyAddress: ['', Validators.required],
      companyContact: ['', Validators.required]
    });

    this.commonFieldsGroup.controls['assetcategory'].valueChanges.subscribe(
      data => {
        if (data === 'PC' || data === 'LAPTOP') {
          this.specialFormGroup = this.computerFormGroup;
        } else if (data === 'PROJECTOR') {
          this.specialFormGroup = this.projectorFormGroup;
        } else if (data === 'FURNITURE') {
          this.specialFormGroup = this.furnitureFormGroup;
        } else {
          this.specialFormGroup = this.otherFormGroup;
        }
      }
    );

    this.computerFormGroup = this.fb.group({
      brandName: ['', Validators.required],
      capacity: ['', Validators.required],
      ram: ['', Validators.required],
      processor: ['', Validators.required]
    });

    this.projectorFormGroup = this.fb.group({
      brandName: ['', Validators.required],
      category: ['', Validators.required],
      qty: ['', Validators.required]
    });

    this.furnitureFormGroup = this.fb.group({
      brandName: ['', Validators.required],
      category: ['', Validators.required],
      qty: ['', Validators.required]
    });

    this.otherFormGroup = this.fb.group({
      category: ['', Validators.required],
      qty: ['', Validators.required]
    });
  }

  ngOnInit() {}

  getErrorMessage = (fg: FormGroup, controller: string) => {
    try {
      const formController = fg.controls[controller];
      return formController.hasError('required')
        ? 'You must enter a value'
        : formController.hasError('email')
        ? 'Not a valid email'
        : '';
    } catch (error) {
      console.log('error', error, controller);
    }
  };

  checkFormControlIsValid(fg: FormGroup, control: string) {
    return fg.controls[control].invalid;
  }

  onSubmit = () => {
    let asset: Asset;
    const category = this.commonFieldsGroup.controls['assetcategory'].value;
    if (category === 'PC' || category === 'LAPTOP') {
      asset = {
        ...this.commonFieldsGroup.value,
        ...this.computerFormGroup.value
      };
    } else if (category === 'PROJECTOR') {
      asset = {
        ...this.commonFieldsGroup.value,
        ...this.projectorFormGroup.value
      };
    } else if (category === 'FURNITURE') {
      asset = {
        ...this.commonFieldsGroup.value,
        ...this.computerFormGroup.value
      };
    } else {
      asset = {
        ...this.commonFieldsGroup.value,
        ...this.otherFormGroup.value
      };
    }
    console.log('asset', asset);
    if (asset.quantity === 0 || asset.quantity === undefined) {
      asset.quantity = 1;
    }
    asset.quantity = 1;

    this.assetService
      .addNewAsset(asset)
      .then(data => {
        this.swal.viewSuccessMessage('Success', 'Asset added successfully');
        this.commonFieldsGroup.reset();
        this.computerFormGroup.reset();
        this.projectorFormGroup.reset();
        this.furnitureFormGroup.reset();
        this.otherFormGroup.reset();
        this.stepper.reset();
      })
      .catch(error => {
        this.swal.viewErrorMessage(
          'Error',
          'Sorry asset adding failure please try again'
        );
        console.log('error', error);
      });
  };

  categoryChange = $event => {
    console.log('$event', $event);
  };
}
