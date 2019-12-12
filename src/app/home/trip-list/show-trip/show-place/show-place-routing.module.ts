import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPlacePage } from './show-place.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPlacePageRoutingModule {}
