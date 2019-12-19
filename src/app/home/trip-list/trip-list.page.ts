import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { latLng, MapOptions, tileLayer, Map } from 'leaflet';

@Component({
	selector: 'app-trip-list',
	templateUrl: './trip-list.page.html',
	styleUrls: [ './trip-list.page.scss' ]
})
export class TripListPage implements OnInit {
	// devrait être Trip
	trips: any = [];
	mapOptions: any;
	constructor(
		private auth: AuthService,
		// TODO: inject the HTTP client.
		public http: HttpClient,
		private geolocation: Geolocation,
		private router: Router
	) {
		this.mapOptions = {
			layers: [ tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }) ],
			zoom: 13,
			center: latLng(46.778186, 6.641524)
		};
	}

	ngOnInit() {
		const url = '/api/trips';
		this.http.get(url).subscribe((trips) => {
			this.trips = trips;
			console.log(`Trips loaded`, trips);
		});
		//geocalisation
		this.geolocation
			.getCurrentPosition()
			.then((position: Geoposition) => {
				const coords = position.coords;
				console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
			})
			.catch((err) => {
				console.warn(`Could not retrieve user position because: ${err.message}`);
			});
	}

	newTrip() {
		this.router.navigateByUrl('/create-trip');
	}
	newPlace() {
		this.router.navigateByUrl('/create-place');
	}

	onMapReady(map: Map) {
		setTimeout(() => map.invalidateSize(), 0);
	}

	showTrip(tripId) {
		this.router.navigateByUrl('/home/show-trip');
		console.log('show my trip');
		console.log(tripId);
	}
}
