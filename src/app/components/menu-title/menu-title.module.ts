import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuTitleComponent } from './menu-title.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MenuTitleComponent],
  exports: [MenuTitleComponent]
})
export class MenuTitleComponentModule {}
