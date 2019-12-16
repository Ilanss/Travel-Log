import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip';

@Component({
	selector: 'app-trip-list',
	templateUrl: './trip-list.page.html',
	styleUrls: [ './trip-list.page.scss' ]
})
export class TripListPage implements OnInit {
	// devrait être Trip
	trips: any = [];
	constructor(
		private auth: AuthService,
		// TODO: inject the HTTP client.
		public http: HttpClient,
		private router: Router
	) {}

	ngOnInit() {
		const url = '/api/trips';
		this.http.get(url).subscribe((trips) => {
			this.trips = trips;
			console.log(`Trips loaded`, trips);
		});
	}

	newTrip() {
		this.router.navigateByUrl('/create-trip');
	}
	newPlace() {
		this.router.navigateByUrl('/create-place');
	}
}
