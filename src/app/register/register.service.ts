import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterRequest } from '../models/register-request';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class RegisterService {
    constructor(private http: HttpClient) { }

    register(registerRequest: RegisterRequest) {
        const registerUrl = `/api/users`;
        return this.http.post(registerUrl, registerRequest)

    }
}
