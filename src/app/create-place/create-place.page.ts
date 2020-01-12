import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { QimgImage } from '../models/qimg-image';
import { PictureService } from '../services/picture/picture.service';
import { NgForm } from '@angular/forms';
import { PlaceRequest } from '../models/place-request';
import {CreatePlaceService} from './create-place.service';
import {first} from "rxjs/operators";

@Component({
	selector: 'app-create-place',
	templateUrl: './create-place.page.html',
	styleUrls: ['./create-place.page.scss']
})
export class CreatePlacePage implements OnInit {
	dataPlace: PlaceRequest;
	pictureData: string;
	picture: QimgImage;
	placeRequest: PlaceRequest;
	placeError: boolean;

	constructor(
		private createPlaceService: CreatePlaceService,
		private router: Router,
		private camera: Camera,
		private location: Location,
		private pictureService: PictureService
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
		this.pictureService.takeAndUploadPicture().subscribe(picture => {
			this.picture = picture;
			console.log(this.picture.url)
		}, err => {
			console.warn('Could not take picture', err);
		});
	}
	onSubmit(form: NgForm) {
		// Do not do anything if the form is invalid.
		if (form.invalid) {
			return;
		}

		this.placeError = false;

		// Perform the authentication request to the API.

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
	ngOnInit() { }
	back() {
		this.location.back();
		//this.router.navigateByUrl('/home/trip-list');
	}
}
