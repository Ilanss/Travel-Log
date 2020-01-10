import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { QimgImage } from '../models/qimg-image';
import { PictureService } from '../services/picture/picture.service';
import { NgForm } from '@angular/forms';
import { PlaceRequest } from '../models/place-request';
import {createPlaceService} from './create-place.service';

@Component({
	selector: 'app-create-place',
	templateUrl: './create-place.page.html',
	styleUrls: ['./create-place.page.scss']
})
export class CreatePlacePage implements OnInit {
	dataPlace: PlaceRequest;
	pictureData: string;
	picture: QimgImage;
	constructor(private createPlaceService: createPlaceService,private router: Router, private camera: Camera, private location: Location, private pictureService: PictureService) { }
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
		// Perform the authentication request to the API.
		
	}
	ngOnInit() { }
	back() {
		this.location.back();
		//this.router.navigateByUrl('/home/trip-list');
	}
}
