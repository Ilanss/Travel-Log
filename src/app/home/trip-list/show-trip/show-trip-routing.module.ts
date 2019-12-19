import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTripPage } from './show-trip.page';

const routes: Routes = [
	{
		path: '',
		component: ShowTripPage
	},
	{
		path: 'show-place',
		loadChildren: () => import('./show-place/show-place.module').then((m) => m.ShowPlacePageModule)
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ShowTripPageRoutingModule {}
