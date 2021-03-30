import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabGaleryPageRoutingModule } from './tab-galery-routing.module';

import { TabGaleryPage } from './tab-galery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabGaleryPageRoutingModule
  ],
  declarations: [TabGaleryPage]
})
export class TabGaleryPageModule {}
