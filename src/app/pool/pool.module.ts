import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PoolPage } from './pool.page';
import { AssetComponent } from '../components/asset/asset.component';
import { MatCardModule } from '@angular/material/card';
const routes: Routes = [
  {
    path: '',
    component: PoolPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [PoolPage, AssetComponent],
  entryComponents: [AssetComponent]
})
export class PoolPageModule {}
