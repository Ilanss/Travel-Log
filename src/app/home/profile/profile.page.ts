import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

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
