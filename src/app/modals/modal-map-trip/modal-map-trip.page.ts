import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { latLng, MapOptions, tileLayer, Map, Marker, marker } from 'leaflet';
import {NavParams} from "@ionic/angular";
import { defaultIcon } from './default-marker';

@Component({
	selector: 'app-modal-map-trip',
	templateUrl: './modal-map-trip.page.html',
	styleUrls: [ './modal-map-trip.page.scss' ]
})

export class ModalMapTripPage implements OnInit {
	place: object;
	// devrait être Trip
	mapOptions: MapOptions;
	mapMarkers: Marker[];
	constructor(
		private auth: AuthService,
		// TODO: inject the HTTP client.
		public http: HttpClient,
		private geolocation: Geolocation,
		private router: Router,
		navParams: NavParams
	) {
		this.place = navParams.get('place');

		this.mapOptions = {
			layers: [ tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }) ],
			zoom: 13,
			center: latLng(this.place.location.coordinates[0], this.place.location.coordinates[1])
		};
		this.mapMarkers = [
			marker([ this.place.location.coordinates[0], this.place.location.coordinates[1] ], { icon: defaultIcon }),
		];
	}

	ngOnInit() {
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

	onMapReady(map: Map) {
		setTimeout(() => map.invalidateSize(), 0);
	}

	dismiss() {
		// using the injected ModalController this page
		// can "dismiss" itself and optionally pass back data
		this.modal.dismiss({
			'dismissed': true
		});
	}
}
