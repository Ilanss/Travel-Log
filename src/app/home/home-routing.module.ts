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
				path: '',
				redirectTo: 'trip-list',
				pathMatch: 'full'
			},
			{
				// Route that loads the CreateTrip module
				path: 'search',
				loadChildren: () => import('./search/search.module').then((m) => m.SearchPageModule)
			},
			{
				// Route that loads the PlacesMap module
				path: 'trip-list',
				loadChildren: () => import('./trip-list/trip-list.module').then((m) => m.TripListPageModule)
			},
			{
				// Route that loads the TripList module
				path: 'profile',
				loadChildren: () => import('./profile/profile.module').then((m) => m.ProfilePageModule)
			},
			{
				path: 'show-trip/:id',
				loadChildren: () => import('./trip-list/show-trip/show-trip.module').then((m) => m.ShowTripPageModule)
			}
		]
	}

];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
