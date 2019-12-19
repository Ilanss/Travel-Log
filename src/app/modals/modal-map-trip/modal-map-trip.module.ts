import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMapTripPageRoutingModule } from './modal-map-trip-routing.module';

import { ModalMapTripPage } from './modal-map-trip.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMapTripPageRoutingModule,
    LeafletModule
  ],
  declarations: [ModalMapTripPage]
})
export class ModalMapTripPageModule {}
