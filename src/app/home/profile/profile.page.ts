import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';

import { EditUserService } from './edit-user.service';
import { RegisterRequest } from 'src/app/models/register-request';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: [ './profile.page.scss' ]
})
export class ProfilePage {
	message: any;
	placesCount: number;
	tripsCount: number;
	userEdit: boolean;
	userError: boolean;
	passwordError: boolean;
	userRequest: RegisterRequest;
	userId: string;
	user: any;
	passwordType: string = 'password';
	passwordIcon: string = 'eye-off';
	constructor(
		// TODO: inject the authentication provider.
		private auth: AuthService,
		public http: HttpClient,
		private router: Router,
		private wsService: WebsocketService,
		private editUserService: EditUserService
	) {
		this.wsService.listen().subscribe((message: any) => {
			this.message = JSON.parse(message);
			this.placesCount = this.message.stats.placesCount;
			this.tripsCount = this.message.stats.tripsCount;
			console.log(this.message.stats);
			//console.log(JSON.parse(message))
		});
		this.userRequest = new RegisterRequest();
		this.userEdit = true;
	}
	ngOnInit() {
		this.auth.getUser().subscribe((user) => {
			this.userId = user.id;
			console.log('userid', this.userId);
			//API call to retrive trip data
			const userUrl = '/api/users/' + this.userId;
			this.http.get(userUrl).subscribe((user) => {
				this.user = user;
				console.log(`User info loaded`, user);
			});
		});
	}

	// TODO: add a method to log out.
	logOut() {
		this.auth.logOut();
		this.router.navigateByUrl('/login');
	}
	settings() {
		this.userEdit = !this.userEdit;
	}
	onSubmit(form: NgForm) {
		// Do not do anything if the form is invalid.
		if (form.invalid) {
			return;
		}

		// Hide any previous error.
		this.userError = false;
		this.passwordError = false;

		// Perform the authentication request to the API.
		this.editUserService.edit(this.userId, this.userRequest).pipe(first()).subscribe({
			next: () => {
				console.log('user edited');
			},
			error: (err) => {
				console.log(this.userRequest);
				this.userError = true;
				console.warn(`user edition failed: ${err.message}`);
			}
		});
	}
	hideShowPassword() {
		this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
		this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
	}
}
