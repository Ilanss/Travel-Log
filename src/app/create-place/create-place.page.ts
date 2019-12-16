import { Component, OnInit } from '@angular/core';
import { Camera , CameraOptions} from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
  pictureData: string;
  constructor(private router: Router,private camera: Camera) { }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(pictureData => {
      this.pictureData = pictureData;
    }).catch(err => {
      console.warn(`Could not take picture because: ${err.message}`);
    });
  }
  ngOnInit() {
  }
  back() {
		this.router.navigateByUrl('/home/trip-list');
	}

}
