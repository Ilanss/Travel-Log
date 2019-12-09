import { Component } from '@angular/core';

// TODO: add an interface to represent a tab.
export interface HomePageTab {
	title: string; // The title of the tab in the tab bar
	icon: string; // The icon of the tab in the tab bar
	path: string; // The route's path of the tab to display
}

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage {
	tabs: HomePageTab[];

	constructor() {
		this.tabs = [
			{ title: 'New Trip', icon: 'add', path: 'create-trip' },
			{ title: 'Places Map', icon: 'map', path: 'places-map' },
			{ title: 'Trip List', icon: 'list', path: 'trip-list' }
		];
	}
}
