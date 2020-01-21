import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPicturePlace } from './modal-picture-place.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPicturePlace
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPicturePlaceRoutingModule {}
