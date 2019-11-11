import { MenuTitleComponentModule } from './../components/menu-title/menu-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { ComplainPage } from './complain.page';

const routes: Routes = [
  {
    path: '',
    component: ComplainPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTitleComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComplainPage],
  providers: [QRScanner]
})
export class ComplainPageModule {}
