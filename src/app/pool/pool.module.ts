import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PoolPage } from './pool.page';
import { AssetComponent } from '../components/asset/asset.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
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
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  declarations: [PoolPage, AssetComponent],
  entryComponents: [AssetComponent]
})
export class PoolPageModule {}
