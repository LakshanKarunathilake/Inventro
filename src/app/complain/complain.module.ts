import { MenuTitleComponentModule } from './../components/menu-title/menu-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComplainPage } from './complain.page';
import { MatInputModule } from '@angular/material/input';

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
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComplainPage],
  providers: [QRScanner]
})
export class ComplainPageModule {}
