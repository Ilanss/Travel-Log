import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPlacePageRoutingModule } from './show-place-routing.module';

import { ShowPlacePage } from './show-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPlacePageRoutingModule
  ],
  declarations: [ShowPlacePage]
})
export class ShowPlacePageModule {}
