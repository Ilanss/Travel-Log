import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { latLng, tileLayer, Map } from 'leaflet';
import { ModalMapTripPage } from 'src/app/modals/modal-map-trip/modal-map-trip.page';

import { DeleteTripService } from './delete-trip.service';
import { DeletePlaceService } from './delete-place.service';
import { EditTripService } from './edit-trip.service';
import { AuthService } from '../../../auth/auth.service';

import { first } from 'rxjs/operators';
import { TripRequest } from '../../../models/trip-request';
import {forEach} from "@angular-devkit/schematics";

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
	place: object;
	mapOptions: any;
	tripEdit: boolean;
	canEdit: boolean;
	formInvalid: boolean;
	tripRequest: TripRequest;
	tripError: boolean;
	userId: any;
	constructor(
		private auth: AuthService,
		private router: Router,
		private route: ActivatedRoute,
		public http: HttpClient,
		public modalController: ModalController,
		private geolocation: Geolocation,
		public alertController: AlertController,
		private deleteTripService: DeleteTripService,
		private deletePlaceService: DeletePlaceService,
		private editTripService: EditTripService
	) {
		this.mapOptions = {
			layers: [ tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }) ],
			zoom: 13,
			center: latLng(46.778186, 6.641524)
		};
		this.tripEdit = true;
		this.canEdit = false;
		this.formInvalid = false;
		this.tripRequest = new TripRequest();
	}

	ngOnInit() {
		//get id from url params
		this.sub = this.route.params.subscribe((params) => {
			this.id = params['id']; // (+) converts string 'id' to a number
			console.log('tripid', this.id);
			// In a real app: dispatch action to load the details here.
		});
		//API call to retrive trip data
		const tripUrl = '/api/trips/' + this.id;
		this.http.get(tripUrl).subscribe((trip) => {
			this.trip = trip;
			this.auth.getUser().subscribe((user) => {
				this.userId = user.id;
				console.log('userid', this.userId);
				console.log(this.trip.userId);
				if (this.userId == this.trip.userId) {
					this.canEdit = true;
				}
				console.log(this.canEdit);
			});
			console.log(`Trip info loaded`, trip);
		});
		//API call to retrieve place data -- BUG
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

	async showMap(placeId) {
		//show modal with map
		const placeUrl = '/api/places/'+placeId;
		this.http.get(placeUrl).subscribe(async (place) => {
			this.place = place;

			const modal = await this.modalController.create({
				component: ModalMapTripPage,
				componentProps: {
					place : this.place,
				}
			});
			return await modal.present();
		});
	}

	onMapReady(map: Map) {
		setTimeout(() => map.invalidateSize(), 0);
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	newPlace() {
		this.router.navigateByUrl('/home/show-trip/' + this.id + '/create-place');
	}
	async deletePlace(placeId) {
		const alert = await this.alertController.create({
			header: 'Alert',
			subHeader: 'To delete or not to delete?',
			message: 'You really want to delete this place?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					}
				},
				{
					text: 'Delete',

					handler: () => {
						this.deletePlaceService.delete(placeId).subscribe({
							next: () => {},
							error: (err) => {
								console.log(this.id);
								console.warn(`error: ${err.message}`);
							}
						});
						console.log('Confirm Delate');
					}
				}
			]
		});
		await alert.present();
	}
	settings() {
		if (this.canEdit == true) {
			this.tripEdit = !this.tripEdit;
		}
	}
	editForm() {

	}
	async deleteTrip() {
		const alert = await this.alertController.create({
			header: 'Alert',
			subHeader: 'To delete or not to delete?',
			message: 'You really want to delete this trip?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					}
				},
				{
					text: 'Delete',

					handler: () => {
						this.deleteTripService.delete(this.id).subscribe({
							next: () => {
								this.router.navigateByUrl('/home/trip-list');
							},
							error: (err) => {
								console.log(this.id);
								console.warn(`error: ${err.message}`);
							}
						});
						console.log('Confirm Delate');
					}
				}
			]
		});
		await alert.present();
	}
	onSubmit(form: NgForm) {
		// Do not do anything if the form is invalid.
		if (form.invalid) {
			return;
		}

		// Hide any previous error.
		this.tripError = false;

		// Perform the authentication request to the API.
		this.editTripService.edit(this.id, this.tripRequest).pipe(first()).subscribe({
			next: () => {},
			error: (err) => {
				console.log(this.tripRequest);
				this.tripError = true;
				console.warn(`Trip edition failed: ${err.message}`);
			}
		});
	}
	back() {
		this.router.navigateByUrl('/home/trip-list');
	}
}
