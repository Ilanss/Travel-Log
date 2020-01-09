import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { latLng, tileLayer, Map } from 'leaflet';
import { ModalMapTripPage } from 'src/app/modals/modal-map-trip/modal-map-trip.page';

@Component({
	selector: 'app-show-trip',
	templateUrl: './show-trip.page.html',
	styleUrls: [ './show-trip.page.scss' ]
})
export class ShowTripPage implements OnInit {
	id: number;
	private sub: any;
	trip: any;
	places: any;
	mapOptions: any;
	tripEdit: boolean;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public http: HttpClient,
		private geolocation: Geolocation,
		private modal: ModalController
	) {
		this.mapOptions = {
			layers: [ tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }) ],
			zoom: 13,
			center: latLng(46.778186, 6.641524)
		};
		this.tripEdit = true;
	}

	ngOnInit() {
		//get id from url params
		this.sub = this.route.params.subscribe((params) => {
			this.id = params['id']; // (+) converts string 'id' to a number
			console.log(this.id);
			// In a real app: dispatch action to load the details here.
		});
		//API call to retrive trip data
		const tripUrl = '/api/trips/' + this.id;
		this.http.get(tripUrl).subscribe((trip) => {
			this.trip = trip;
			console.log(`Trip info loaded`, trip);
		});
		//API call to retrive place data -- BUG
		const placesUrl = '/api/places/?trip=' + this.id;
		this.http.get(placesUrl).subscribe((places) => {
			this.places = places;
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
	showMap(mapId) {
		//show modal with map
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
	delatePlace() {}
	settings() {
		this.tripEdit = !this.tripEdit;
	}
	async openModalMapTrip() {
		const modal = await this.modal.create({
			component: ModalMapTripPage
		});
		modal.present();
	}

	back() {
		this.router.navigateByUrl('/home/trip-list');
	}
}
