import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewAssetPage } from './new-asset.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: NewAssetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    ReactiveFormsModule,
    MenuTitleComponentModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewAssetPage]
})
export class NewAssetPageModule {}
