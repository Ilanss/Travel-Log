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
			{ title: '', icon: 'search', path: 'search' },
			{ title: '', icon: 'pin', path: 'trip-list' },
			{ title: '', icon: 'person', path: 'profile' }
		];
	}
}
