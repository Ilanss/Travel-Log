import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Trip } from '../../../models/trip';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { latLng, MapOptions, tileLayer, Map } from 'leaflet';
@Component({
	selector: 'app-show-trip',
	templateUrl: './show-trip.page.html',
	styleUrls: [ './show-trip.page.scss' ]
})
export class ShowTripPage implements OnInit {
	id: number;
	private sub: any;
	trip: object;
	places: any;
	mapOptions: any;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public http: HttpClient,
		private geolocation: Geolocation
	) {
		this.mapOptions = {
			layers: [ tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }) ],
			zoom: 13,
			center: latLng(46.778186, 6.641524)
		};
	}

	ngOnInit() {
		//get id from url params
		this.sub = this.route.params.subscribe((params) => {
			this.id = params['id']; // (+) converts string 'id' to a number
			//console.log(this.id);
			// In a real app: dispatch action to load the details here.
		});
		//API call to retrive trip data
		const tripUrl = '/api/trips/' + this.id;
		this.http.get(tripUrl).subscribe((trip) => {
			this.trip = trip;
			console.log(`Trip info loaded`, trip);
		});
		//API call to retrive place data
		const placesUrl = '/api/places/';
		this.http
			.get(placesUrl, {
				params: { trip: String(this.id) }
			})
			.subscribe((places) => {
				this.places += places;
				console.log(`Places info loaded`, places);
			});
		//geocalisation call for user position data
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
	onMapReady(map: Map) {
		setTimeout(() => map.invalidateSize(), 0);
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	newPlace() {
		this.router.navigateByUrl('/create-place');
	}

	back() {
		this.router.navigateByUrl('/home/trip-list');
	}
}
