import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularDelegate } from '@ionic/angular';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: [ './search.page.scss' ]
})
export class SearchPage implements OnInit {
	searchbar = document.querySelector('ion-searchbar');
	trips: any = [];
	tripsCache: any;
	places: any = [];
	placesCache: any;
	searchTerm: any;
	tripHidden: number;
	placeHidden: number;
	constructor(public http: HttpClient) {}

	ngOnInit() {
		const url = '/api/trips/';
		this.http.get(url).subscribe((trips) => {
			this.trips = trips;
			this.tripsCache = trips;
			console.log(`Trips loaded`, trips);
		});
		const url2 = '/api/places/';
		this.http.get(url2).subscribe((places) => {
			this.places = places;
			this.placesCache = places;
			console.log(`Places loaded`, places);
		});
	}
	//new search algortihm -- nothing happened
	/*searchTermChange(event) {
		//reset liste before filter
		this.trips = this.tripsCache;
		this.places = this.placesCache;
		console.log('tipped');
		const query = event.target.value.toLowerCase();
		console.log(query);

		this.trips.filter((trip) => {
			return trip.title.toLowerCase().indexOf(query) > -1;
		});
		this.places.filter((place) => {
			return place.name.toLowerCase().indexOf(query) > -1;
		});

		console.log(this.trips);
	} */

	//old search algorithm -- but it works
	searchTermChange(event) {
		console.log('tipped');
		const query = event.target.value.toLowerCase();
		console.log(query);
		requestAnimationFrame(() => {
			this.trips.forEach((trip) => {
				const shouldShowTrip = trip.title.toLowerCase().indexOf(query) > -1;
				document.getElementById(trip.id).style.display = shouldShowTrip ? 'block' : 'none';
			});
			this.places.forEach((place) => {
				const shouldShowPlace = place.name.toLowerCase().indexOf(query) > -1;
				document.getElementById(place.id).style.display = shouldShowPlace ? 'block' : 'none';
			});
		});
	}
}
