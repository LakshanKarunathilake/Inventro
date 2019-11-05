import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import { NotificationComponent } from '../components/notification/notification.component';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
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
  entryComponents: [NotificationComponent],
  declarations: [NotificationsPage, NotificationComponent]
})
export class NotificationsPageModule {}
