import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

//import { AuthService } from '../auth/auth.service';
import { RegisterRequest } from '../models/register-request';
import { RegisterService } from './register.service'

/**
 * register page.
 */
@Component({
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage {

  /**
   * This authentication request object will be updated when the user
   * edits the register form. It will then be sent to the API.
   */
  authRequest: RegisterRequest;


  /**
   * If true, it means that the authentication API has return a failed response
   * (probably because the name or password is incorrect).
   */
  registerError: boolean;

  constructor(
      private registerService: RegisterService,
      private router: Router
  ) {
    this.authRequest = new RegisterRequest();
  }

  /**
   * Called when the register form is submitted.
   */
  onSubmit(form: NgForm) {

    // Do not do anything if the form is invalid.
    if (form.invalid) {
      return;
    }

    // Hide any previous register error.
    this.registerError = false;

    // Perform the authentication request to the API.
    this.registerService.register(this.authRequest)
        .pipe(first())
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/home');
          },
          error: err => {
            console.log(this.authRequest)
            this.registerError = true;
            console.warn(`Authentication failed: ${err.message}`);
          }
        });
  }
}
