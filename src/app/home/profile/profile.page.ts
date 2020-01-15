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
	message: string;
	constructor(
		// TODO: inject the authentication provider.
		private auth: AuthService,
		private router: Router,
		private wsService: WebsocketService
	) {
		this.wsService
		.listen()
		.subscribe(message => {
			// Do something when a message is received
		});
	}

	// TODO: add a method to log out.
	logOut() {
		this.auth.logOut();
		this.router.navigateByUrl('/login');
	}

	sendMessage() {
		this.wsService.send({ msg: this.message });
		console.log(this.message);
	  }
	

}
