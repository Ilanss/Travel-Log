import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterRequest } from '../../models/register-request';

@Injectable({ providedIn: 'root' })
export class EditUserService {
	constructor(private http: HttpClient) {}

	edit(userId, authRequest: RegisterRequest) {
		const registerUrl = `/api/users/` + userId;
		return this.http.patch(registerUrl, authRequest);
	}
}
