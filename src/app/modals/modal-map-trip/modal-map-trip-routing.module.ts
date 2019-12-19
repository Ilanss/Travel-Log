import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMapTripPage } from './modal-map-trip.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMapTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMapTripPageRoutingModule {}
