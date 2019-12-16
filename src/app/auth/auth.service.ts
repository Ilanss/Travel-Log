import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, from } from 'rxjs';
import { delayWhen, map } from 'rxjs/operators';

import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';
import { AuthRequest } from '../models/auth-request';

import { Storage } from '@ionic/storage';

/**
 * Authentication service for login/logout.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
	private auth$: Observable<AuthResponse>;
	private authSource: ReplaySubject<AuthResponse>;

	constructor(private http: HttpClient, private storage: Storage) {
		this.authSource = new ReplaySubject(1);
		this.auth$ = this.authSource.asObservable();

		// TODO: load the stored authentication response from storage when the app starts.
		this.storage.get('auth').then((auth) => {
			// Push the loaded value into the observable stream.
			this.authSource.next(auth);
		});
	}

	isAuthenticated(): Observable<boolean> {
		return this.auth$.pipe(map((auth) => Boolean(auth)));
	}

	getUser(): Observable<User> {
		return this.auth$.pipe(map((auth) => (auth ? auth.user : undefined)));
	}

	getToken(): Observable<string> {
		return this.auth$.pipe(map((auth) => (auth ? auth.token : undefined)));
	}

	logIn(authRequest: AuthRequest): Observable<User> {
		const authUrl = '/api/auth';
		return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
			// TODO: delay the observable stream while persisting the authentication response.
			delayWhen((auth) => {
				return this.saveAuth(auth);
			}),
			map((auth) => {
				this.authSource.next(auth);
				console.log(`User ${auth.user.name} logged in`);
				return auth.user;
			})
		);
	}

	logOut() {
		this.authSource.next(null);
		// TODO: remove the stored authentication response from storage when logging out.
		this.storage.remove('auth');
		console.log('User logged out');
	}

	private saveAuth(auth: AuthResponse): Observable<void> {
		return from(this.storage.set('auth', auth));
	}
}
