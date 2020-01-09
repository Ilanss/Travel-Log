import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { QimgImage } from '../models/qimg-image';
import { PictureService } from '../services/picture/picture.service';

@Component({
	selector: 'app-create-place',
	templateUrl: './create-place.page.html',
	styleUrls: [ './create-place.page.scss' ]
})
export class CreatePlacePage implements OnInit {
	placeName: string;
	placeDescription: string;
	placeLocation: string;
	pictureData: string;
	picture: QimgImage;
	constructor(private router: Router, private camera: Camera, private location: Location,private pictureService: PictureService) {}
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
	ngOnInit() {}
	back() {
		this.location.back();
		//this.router.navigateByUrl('/home/trip-list');
	}
}
