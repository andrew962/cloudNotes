import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsManagerPageRoutingModule } from './tabs-manager-routing.module';

import { TabsManagerPage } from './tabs-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsManagerPageRoutingModule
  ],
  declarations: [TabsManagerPage]
})
export class TabsManagerPageModule {}
