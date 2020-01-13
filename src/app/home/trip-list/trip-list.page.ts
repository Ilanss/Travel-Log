import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
	selector: 'app-trip-list',
	templateUrl: './trip-list.page.html',
	styleUrls: [ './trip-list.page.scss' ]
})
export class TripListPage implements OnInit {
	// devrait être Trip
	trips: any = [];
	mapOptions: any;
	userId: any;
	constructor(
		private auth: AuthService,
		// TODO: inject the HTTP client.
		public http: HttpClient,
		private geolocation: Geolocation,
		private router: Router
	) {}

	ngOnInit() {
		// Execute with the observer object
		this.auth.getUser().subscribe((user) => {
			this.userId = user.id;
			//console.log('userid', this.userId);
			const url = '/api/trips/?user=' + this.userId;
			this.http.get(url).subscribe((trips) => {
				this.trips = trips;
				console.log(`Trips loaded`, trips);
			});
		});

		//geocalisation
		// this.geolocation
		// 	.getCurrentPosition()
		// 	.then((position: Geoposition) => {
		// 		const coords = position.coords;
		// 		console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
		// 	})
		// 	.catch((err) => {
		// 		console.warn(`Could not retrieve user position because: ${err.message}`);
		// 	});
	}

	newTrip() {
		this.router.navigateByUrl('/create-trip');
	}

	showTrip(tripId) {
		this.router.navigateByUrl('/home/show-trip');
		console.log('show my trip');
		console.log(tripId);
	}
}
