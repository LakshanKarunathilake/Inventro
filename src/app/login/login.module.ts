import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { LoginPage } from './login.page';
import { ForgetPasswordComponent } from '../foregetpassword/foregetpassword.component';

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
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [LoginPage, ForgetPasswordComponent],
  entryComponents: [ForgetPasswordComponent]
})
export class LoginPageModule {}
