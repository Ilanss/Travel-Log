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
	places: any = [];
	searchTerm: any;
	tripHidden: number;
	placeHidden: number;
	constructor(public http: HttpClient) {
		this.tripHidden = 0;
		this.placeHidden = 0;
	}

	ngOnInit() {
		const url = '/api/trips/';
		this.http.get(url).subscribe((trips) => {
			this.trips = trips;
			console.log(`Trips loaded`, trips);
		});
		const url2 = '/api/places/';
		this.http.get(url2).subscribe((places) => {
			this.places = places;
			console.log(`Places loaded`, places);
		});
	}
	searchTermChange(event) {
		this.tripHidden == 0;
		this.placeHidden == 0;
		console.log('tipped');
		const query = event.target.value.toLowerCase();
		console.log(query);

		requestAnimationFrame(() => {
			this.trips.forEach((trip) => {
				const shouldShowTrip = trip.title.toLowerCase().indexOf(query) > -1;
				document.getElementById(trip.id).style.display = shouldShowTrip ? 'block' : 'none';
				if (shouldShowTrip == false) {
					this.tripHidden++;
				}
				console.log(this.tripHidden);
			});

			this.places.forEach((place) => {
				const shouldShowPlace = place.name.toLowerCase().indexOf(query) > -1;
				document.getElementById(place.id).style.display = shouldShowPlace ? 'block' : 'none';
				if (shouldShowPlace == false) {
					this.placeHidden++;
				}
				console.log(this.placeHidden);
			});
		});
		/*if (this.tripHidden == this.trips.length && this.placeHidden == this.places.length) {
			document.getElementById('trips').style.display = 'none';
			document.getElementById('places').style.display = 'none';
		} else if (this.tripHidden == this.trips.length) {
			document.getElementById('trips').style.display = 'none';
		} else if (this.placeHidden == this.places.length) {
			document.getElementById('places').style.display = 'none';
		} */
	}
}
