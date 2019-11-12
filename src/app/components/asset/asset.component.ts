import { AlertController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/models/Asset';
import { AssetService } from 'src/app/services/Asset/asset.service';
import { AuthenticateService } from 'src/app/services/Authenticate/authenticate.service';
import { BookAsset } from 'src/models/BookAsset';

@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  @Input() asset: Asset;
  constructor(
    private alertController: AlertController,
    private assetService: AssetService,
    private auth: AuthenticateService
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
          name: 'from',
          label: 'From Date',
          type: 'date',
          value: '2019-10-11'
        },
        {
          name: 'to',
          type: 'date'
        },
        {
          name: 'description',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Confirm Cancel', data);
          }
        },
        {
          text: 'Ok',
          handler: data => {
            const now = new Date();
            const request: BookAsset = {
              assetId: asset.assetId,
              id: asset.id,
              assetcategory: asset.assetcategory,
              beginDate: data['from'],
              description: data['description'],
              dueDate: data['to'],
              notificationType: '',
              requestedNic: this.auth.getUser().nic,
              username: this.auth.getUser().firstname,
              requestMadeDate: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
            };
            console.log('request', request);
            if (type === 'reserve') {
              request.requestType = 'REQUEST';
              request.notificationType = 'Booking';
              this.assetService.placeBook(request);
            } else {
              request.requestType = 'BOOK';
              request.notificationType = 'Requesting';
              this.assetService.placeRequest(request);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  deleteAsset = id => {
    this.assetService.deleteAsset(id);
  };

  isAuthorized = type => {
    const authorizedList = {
      book: ['Project Manager', 'Event Organizer', 'Asset Manager'],
      delete: ['Asset Manager'],
      request: ['all']
    };
    const { status } = this.auth.getUser();
    return (
      authorizedList[type].includes(status) ||
      authorizedList[type].includes('all')
    );
  };
}
