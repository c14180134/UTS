import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabGaleryPage } from './tab-galery.page';

const routes: Routes = [
  {
    path: '',
    component: TabGaleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabGaleryPageRoutingModule {}
