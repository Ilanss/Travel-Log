import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlaceRequest } from '../models/place-request';

@Injectable({ providedIn: 'root' })
export class CreatePlaceService {
    constructor(private http: HttpClient) { }

    create(placeRequest: PlaceRequest) {
        const placeUrl = `/api/places`;
        return this.http.post(placeUrl, placeRequest)

    }
}
