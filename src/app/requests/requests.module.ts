import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { RequestsPage } from './requests.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsPage
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
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
