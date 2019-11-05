import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllUsersPage } from './all-users.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';

const routes: Routes = [
  {
    path: '',
    component: AllUsersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MenuTitleComponentModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllUsersPage]
})
export class AllUsersPageModule {}
