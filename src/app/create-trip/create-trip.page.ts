import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { AuthRequest } from '../models/auth-request';

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
