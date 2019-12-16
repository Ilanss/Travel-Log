import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-trip',
  templateUrl: './show-trip.page.html',
  styleUrls: ['./show-trip.page.scss'],
})
export class ShowTripPage implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }
  newPlace() {
		this.router.navigateByUrl('/create-place');
	}

}
