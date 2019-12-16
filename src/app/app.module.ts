import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//auth service
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//storage
import { IonicStorageModule } from '@ionic/storage';

//interceptor
import { AuthInterceptorProvider } from './auth/auth-interceptor.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
	declarations: [ AppComponent ],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		IonicStorageModule.forRoot(),
		LeafletModule.forRoot()
	],
	providers: [
		StatusBar,
		SplashScreen,
		Geolocation,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
