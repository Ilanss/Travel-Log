import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TripRequest } from '../../../models/trip-request';

@Injectable({ providedIn: 'root' })
export class EditTripService {
	constructor(private http: HttpClient) {}

	edit(tripId, tripRequest: TripRequest) {
		const registerUrl = `/api/trips/` + tripId;
		return this.http.patch(registerUrl, tripRequest);
	}
}
