import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DeletePlaceService {
	constructor(private http: HttpClient) {}

	delete(placeId) {
		const registerUrl = `api/places/` + placeId;
		return this.http.delete(registerUrl);
	}
}
