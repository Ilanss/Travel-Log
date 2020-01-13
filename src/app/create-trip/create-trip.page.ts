import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { CreateTripService } from './create-trip.service'
import { TripRequest } from '../models/trip-request';
import {first} from "rxjs/operators";

@Component({
	selector: 'app-create-trip',
	templateUrl: './create-trip.page.html',
	styleUrls: [ './create-trip.page.scss' ]
})
export class CreateTripPage implements OnInit {

	tripRequest: TripRequest;

	tripError: boolean;

	constructor(
		private auth: AuthService,
		public http: HttpClient,
		private router: Router,
		private createTripService: CreateTripService
	)
	{
		this.tripRequest = new TripRequest();
	}

	ngOnInit() {}
	back() {
		this.router.navigateByUrl('/home/trip-list');
	}

	onSubmit(form: NgForm) {

		// Do not do anything if the form is invalid.
		if (form.invalid) {
			return;
		}

		// Hide any previous error.
		this.tripError = false;

		// Perform the authentication request to the API.
		this.createTripService.create(this.tripRequest)
			.pipe(first())
			.subscribe({
				next: () => {
					this.router.navigateByUrl('/home/trip-list');
				},
				error: err => {
					console.log(this.tripRequest)
					this.tripError = true;
					console.warn(`Trip creation failed: ${err.message}`);
				}
			});
	}

}
