import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { latLng, tileLayer } from 'leaflet';
import { ModalMapTripPage } from 'src/app/modals/modal-map-trip/modal-map-trip.page';

@Component({
	selector: 'app-show-trip',
	templateUrl: './show-trip.page.html',
	styleUrls: ['./show-trip.page.scss']
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
		private geolocation: Geolocation,
		private modal: ModalController
	) {
		this.mapOptions = {
			layers: [tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })],
			zoom: 13,
			center: latLng(46.778186, 6.641524)
		};
	}

	ngOnInit() {
	}
	
	newPlace() {
		this.router.navigateByUrl('/create-place');
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
