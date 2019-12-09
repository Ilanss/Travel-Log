import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
	{
		// Default route
		path: '',
		component: HomePage,
		children: [
			{
				// Route that loads the CreateTrip module
				path: 'create-trip',
				loadChildren: () => import('./create-trip/create-trip.module').then((m) => m.CreateTripPageModule)
			},
			{
				// Route that loads the PlacesMap module
				path: 'places-map',
				loadChildren: () => import('./places-map/places-map.module').then((m) => m.PlacesMapPageModule)
			},
			{
				// Route that loads the TripList module
				path: 'trip-list',
				loadChildren: () => import('./trip-list/trip-list.module').then((m) => m.TripListPageModule)
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
