import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-trip',
	templateUrl: './create-trip.page.html',
	styleUrls: [ './create-trip.page.scss' ]
})
export class CreateTripPage implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	back() {
		this.router.navigateByUrl('/home/trip-list');
	}
}
