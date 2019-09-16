import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewEmployeePage } from './new-employee.page';
import { MatInputModule } from '@angular/material/input';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';

const routes: Routes = [
  {
    path: '',
    component: NewEmployeePage
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
    RouterModule.forChild(routes)
  ],
  declarations: [NewEmployeePage]
})
export class NewEmployeePageModule {}
