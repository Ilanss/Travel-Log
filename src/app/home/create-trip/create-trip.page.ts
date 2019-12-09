import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
	selector: 'app-create-trip',
	templateUrl: './create-trip.page.html',
	styleUrls: [ './create-trip.page.scss' ]
})
export class CreateTripPage {
	constructor(
		// TODO: inject the authentication provider.
		private auth: AuthService,
		private router: Router
	) {}

	// TODO: add a method to log out.
	logOut() {
		this.auth.logOut();
		this.router.navigateByUrl('/login');
	}
}
