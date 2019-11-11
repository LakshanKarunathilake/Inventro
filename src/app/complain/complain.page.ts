import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BreakDown } from 'src/models/BreakDown';
import { AuthenticateService } from '../services/Authenticate/authenticate.service';
import { AssetService } from '../services/Asset/asset.service';
@Component({
  selector: 'app-complain',
  templateUrl: './complain.page.html',
  styleUrls: ['./complain.page.scss']
})
export class ComplainPage implements OnInit {
  constructor(
    private qrScanner: QRScanner,
    private auth: AuthenticateService,
    private asset: AssetService
  ) {}
  description: string;
  assetId: string;

  ngOnInit() {}

  scanQR = () => {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  };

  placeBreakdown = () => {
    const { nic, firstname } = this.auth.getUser();
    const now = new Date();
    const breakDown: BreakDown = {
      anyMessage: this.description,
      assetId: this.assetId,
      complainedNic: nic,
      date: `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`,
      fName: firstname,
      notificationType: 'BreakDown'
    };
    this.asset.placeBreakDown(breakDown);
  };
}
