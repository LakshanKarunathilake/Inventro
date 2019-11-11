import { AlertController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/models/Asset';
import { AssetService } from 'src/app/services/Asset/asset.service';

@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  @Input() asset: Asset;
  constructor(
    private alertController: AlertController,
    private assetService: AssetService
  ) {}

  ngOnInit() {}

  async bookAsset(type: string, asset: Asset) {
    const from = new Date();
    const numberOfDaysToAdd = 14;
    from.setDate(from.getDate() + numberOfDaysToAdd);
    console.log('from', from);
    // const request: BookAsset;
    const alert = await this.alertController.create({
      header: 'Mention the From Date, To Date and a message!',
      inputs: [
        {
          name: 'From Date',
          label: 'From Date',
          type: 'date',
          value: '2019-10-11'
        },
        {
          label: 'To Date',
          name: 'To Date',
          type: 'date'
        },
        {
          label: 'Description',
          name: 'Description',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            // this.assetService.placeBook(request);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteAsset = id => {
    this.assetService.deleteAsset(id);
  };
}
