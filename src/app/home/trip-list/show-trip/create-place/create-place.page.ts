import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { QimgImage } from '../../../../models/qimg-image';
import { PictureService } from '../../../../services/picture/picture.service';
import { NgForm } from '@angular/forms';
import { PlaceRequest } from '../../../../models/place-request';
import { CreatePlaceService } from './create-place.service';
import { first } from "rxjs/operators";
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
	selector: 'app-create-place',
	templateUrl: './create-place.page.html',
	styleUrls: ['./create-place.page.scss']
})
export class CreatePlacePage implements OnInit {
	pictureData: string;
	picture: QimgImage;
	placeRequest: PlaceRequest;
	placeError: boolean;
	id: number;
	private sub: any;

	constructor(
		private createPlaceService: CreatePlaceService,
		private router: Router,
		private camera: Camera,
		private location: Location,
		private route: ActivatedRoute,
		private pictureService: PictureService,
		private geolocation: Geolocation
	) {
		this.placeRequest = new PlaceRequest();
	}
	takePicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		};
		/*this.pictureService.takeAndUploadPicture().subscribe(picture => {
			this.picture = picture;
			console.log(this.picture.url)
		}, err => {
			console.warn('Could not take picture', err);
		});*/
	}
	onSubmit(form: NgForm) {
		// Do not do anything if the form is invalid.
		if (form.invalid) {
			return;
		}

		this.placeError = false;

		// Perform the authentication request to the API.

		this.placeRequest.tripId = this.id;

		this.createPlaceService.create(this.placeRequest)
			.pipe(first())
			.subscribe({
				next: () => {
					this.router.navigateByUrl('/home');
				},
				error: err => {
					console.log(this.placeRequest)
					this.placeError = true;
					console.warn(`Place creation failed: ${err.message}`);
				}
			});

	}
	ngOnInit() {
		//get id from url params
		this.sub = this.route.params.subscribe((params) => {
			this.id = params['id']; // (+) converts string 'id' to a number
			console.log("id: "+this.id);
			// In a real app: dispatch action to load the details here.
		});

		this.geolocation.getCurrentPosition().then((position: Geoposition) => {
		     const coords = position.coords;
		     this.placeRequest.location = {
				type: "Point",
				coordinates: [coords.latitude, coords.longitude]
		     };
		     console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
		   }).catch(err => {
		     console.warn(`Could not retrieve user position because: ${err.message}`);
		  });
	}
	back() {
		this.location.back();
		//this.router.navigateByUrl('/home/trip-list');
	}
}
