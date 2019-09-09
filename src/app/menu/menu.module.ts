import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { HomePage } from '../home/home.page';
import { ListPage } from '../list/list.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'list',
        component: ListPage
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
  declarations: [MenuPage, HomePage, ListPage]
})
export class MenuPageModule {}
