import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TripRequest } from '../models/trip-request';

@Injectable({ providedIn: 'root' })
export class CreateTripService {
    constructor(private http: HttpClient) { }

    create(tripRequest: TripRequest) {
        const registerUrl = `/api/trips`;
        return this.http.post(registerUrl, tripRequest)

    }
}
