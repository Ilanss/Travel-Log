import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: [ './search.page.scss' ]
})
export class SearchPage implements OnInit {
	searchbar = document.querySelector('ion-searchbar');
	trips: any = [];
	searchTerm: any;
	constructor(public http: HttpClient) {}

	ngOnInit() {
		const url = '/api/trips/';
		this.http.get(url).subscribe((trips) => {
			this.trips = trips;
			console.log(`Trips loaded`, trips);
		});
	}
	searchTermChange() {
		console.log('tipped');
		const query = event.target.value.toLowerCase();
		requestAnimationFrame(() => {
			this.trips.forEach((trip) => {
				const shouldShow = trip.textContent.toLowerCase().indexOf(query) > -1;
				trip.style.display = shouldShow ? 'block' : 'none';
			});
		});
	}
}
