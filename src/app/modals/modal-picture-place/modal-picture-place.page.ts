import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { PlaceRequest } from 'src/app/models/place-request';

@Component({
	selector: 'app-modal-picture-place',
	templateUrl: './modal-picture-place.page.html'
})
export class ModalPicturePlace implements OnInit {
	modal: any;
	place: any;
	constructor(
		private auth: AuthService,
		// TODO: inject the HTTP client.
		public http: HttpClient,
		private router: Router,
		navParams: NavParams
	) {
		
	}

	ngOnInit() {
	}

	dismiss() {
		// using the injected ModalController this page
		// can "dismiss" itself and optionally pass back data
		this.modal.dismiss({
			dismissed: true
		});
	}
}
