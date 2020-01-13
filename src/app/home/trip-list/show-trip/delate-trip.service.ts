import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DelateTripService {
	constructor(private http: HttpClient) {}

	delete(tripId) {
		const registerUrl = `api/trips/:` + tripId;
		return this.http.delete(registerUrl);
	}
}
