import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule) },
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
		canActivate: [ AuthGuard ]
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule)
	},
	/*{
		path: 'create-place',
		loadChildren: () => import('./create-place/create-place.module').then((m) => m.CreatePlacePageModule),
		canActivate: [ AuthGuard ]
	},*/
	{
		path: 'register',
		loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
	},
	{
		path: 'create-trip',
		loadChildren: () => import('./create-trip/create-trip.module').then((m) => m.CreateTripPageModule),
		canActivate: [ AuthGuard ]
	},
  {
    path: 'modal-map-trip',
    loadChildren: () => import('./modals/modal-map-trip/modal-map-trip.module').then( m => m.ModalMapTripPageModule)
  }

];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
