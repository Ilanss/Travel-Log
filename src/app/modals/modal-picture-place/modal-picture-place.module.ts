import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPicturePlace } from './modal-picture-place.page';
import {ModalPicturePlaceRoutingModule} from './modal-picture-place-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalPicturePlaceRoutingModule,
    IonicModule
  ],
  declarations: [ModalPicturePlace]
})
export class ModalPicturePlacePageModule {}
