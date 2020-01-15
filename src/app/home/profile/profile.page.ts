import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
	message: any;
	placesCount: number;
	tripsCount: number;
	constructor(
		// TODO: inject the authentication provider.
		private auth: AuthService,
		private router: Router,
		private wsService: WebsocketService
	) {
		this.wsService
		.listen()
		
		.subscribe((message: any) => {
			this.message = JSON.parse(message)
			this.placesCount = this.message.stats.placesCount
			this.tripsCount = this.message.stats.tripsCount
			console.log(this.message.stats)
			//console.log(JSON.parse(message))
		  });
	}

	// TODO: add a method to log out.
	logOut() {
		this.auth.logOut();
		this.router.navigateByUrl('/login');
	}

}
