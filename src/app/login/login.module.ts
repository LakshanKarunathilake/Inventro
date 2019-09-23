import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { AuthenticateService } from '../services/authenticate.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage],
  providers: [AuthenticateService]
})
export class LoginPageModule {}
