import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
	selector: 'app-trip-list',
	templateUrl: './trip-list.page.html',
	styleUrls: [ './trip-list.page.scss' ]
})
export class TripListPage implements OnInit {
	constructor(
		private auth: AuthService,
		// TODO: inject the HTTP client.
		public http: HttpClient,
		private router: Router
	) {}

	ionViewDidLoad() {
		// TODO: make an HTTP request to retrieve the trips.
		const url = 'https://comem-travel-log-api.herokuapp.com/api/trips';
		this.http.get(url).subscribe((trips) => {
			console.log('trips loaded', trips);
		});
	}

	ngOnInit() {
		const url = `${environment.apiUrl}/trips`;
		this.http.get(url).subscribe((trips) => {
			console.log(`Trips loaded`, trips);
		});
	}

	newTrip() {
		this.router.navigateByUrl('/create-trip');
	}
}
