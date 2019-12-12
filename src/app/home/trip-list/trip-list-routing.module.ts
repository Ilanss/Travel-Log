import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripListPage } from './trip-list.page';

const routes: Routes = [
	{
		path: '',
		component: TripListPage,
		children: [
			{
				// Route that loads the TripList module
				path: 'create-trip',
				loadChildren: () => import('../create-trip/create-trip.module').then((m) => m.CreateTripPageModule)
			},
			{
				// Route that loads the TripList module
				path: 'show-trip',
				loadChildren: () => import('../show-trip/show-trip.module').then((m) => m.ShowTripPageModule)
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class TripListPageRoutingModule {}
