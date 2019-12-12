import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTripPage } from './show-trip.page';

const routes: Routes = [
  {
    path: '',
    component: ShowTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowTripPageRoutingModule {}
