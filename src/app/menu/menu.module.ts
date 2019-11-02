import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule',
        canActivate: [AuthGuardGuard]
      },
      { path: 'pool', loadChildren: '../pool/pool.module#PoolPageModule' },
      {
        path: 'employee',
        loadChildren:
          '../new-employee/new-employee.module#NewEmployeePageModule',
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'asset',
        loadChildren: '../new-asset/new-asset.module#NewAssetPageModule',
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'notifications',
        loadChildren:
          '../notifications/notifications.module#NotificationsPageModule',
        canActivate: [AuthGuardGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuTitleComponentModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
