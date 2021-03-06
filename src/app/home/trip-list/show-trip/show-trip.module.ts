import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowTripPageRoutingModule } from './show-trip-routing.module';

import { ShowTripPage } from './show-trip.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ModalMapTripPageModule } from 'src/app/modals/modal-map-trip/modal-map-trip.module';
import { ModalPicturePlacePageModule } from 'src/app/modals/modal-picture-place/modal-picture-place.module';

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, ShowTripPageRoutingModule, LeafletModule, ModalMapTripPageModule, ModalPicturePlacePageModule ],
	declarations: [ ShowTripPage ]
})
export class ShowTripPageModule {}
