# Travel-Log
Travel-log is a mobile application that allows you to create and follow a list of trips.
Once registered, each user can create his own travel list and assign each trip one or more places and a descriptive image for each place visited.
In this tutorial we will follow the main functions of Travel-log step by step.

## User managment
To use the application, a user must first create an account with travel-log.

### Create an account
To create an account you need to enter the following information:
- A username (minimum size 3 characters)
- A password (minimum size 3 characters)
![register page](https://imgur.com/s9hh5hm)

### Log into travel-log
Once you have created an account you will be redirected to the login page. The same information entered in the registration form must be entered to confirm authentication and access travel-log.

### Log out 
To exit the application it is necessary to log out by pressing the "logout" button located at the bottom of the profile management page which we will analyze later.

## Navigation
Travel log is made up of 3 main pages:
- MyTrips (allows you to view your travel list)
- Search (allows you to search and filter every trips and places created by all travelLog users)
- Profile (allows you to manage information about your profile and log out).

## Trips managment
The most important functionality of Travel-log is the ability to create multiple trips.

### Create a trip
To create a trip, simply press the "+" button located at the bottom right of the "My trips" page.
To be created a trip needs the following:
- A title (minimum 3 characters)
- A description (minimum 5 characters)

### Show a trip
Once the trip has been created it will be displayed in your list thanks to a preview and you can access its content by pressing on the appropriate item.
Viewing a trip consists of 3 parts:
- A preview of the travel map
- The description and title of the trip
- a list of places related to this specific trip

### Edit a trip
At the top left, in the toolbar, there is an icon that will allow us to access the modification of the element. In this mode, we can change the description or the title of the trip, delete one or more places using the "trash" icons next to each place and, if we wish, delete the trip itself by pressing the red button at the bottom right.

## Places managment
In the trip display screen we can add one or more places by simply pressing the "+" button located at the bottom right.
To create a places it is necessary to insert the following information:
- name (minimum 3 characters)
- descriptions (minimum 5 characters)
At the time of creation, Travel-log will automatically detect the position of the device and assign it to the chosen place.

### Wiew place details
By pressing on the map icon associated with each places we will be redirected to the complete view of the map.
By clicking on the photo icon associated with each places we will be redirected to the cover photo of the chosen place.

[![maquette](https://imagizer.imageshack.com/img921/2264/JWCBfV.png "maquette")](https://imagizer.imageshack.com/img921/2264/JWCBfV.png "maquette")


## Features

A user must be able to register and/or log in (depending on the API's capabilities).
A user must be able to manage the main resources of the API's domain model:
A user must be able to create new instances of all the main resources of the domain model (e.g. create Trips and Places in the Travel Log).

A user must be able to modify at least one of the resources of the domain model (e.g. update a Trip's title and description in the Travel Log).

A user must be able to delete at least one of the resources of the domain model (e.g. delete a Place in the Travel Log).

At least two mobile-oriented features must be used, for example:
Geolocation of the user (e.g. to center a map on the user's location, or to determine a Place's location in the Travel log).

Pictures taken with the phone's camera (works only on physical devices). You are not required to exclusively implement those two ; you can choose others depending on your subject
There must be a map showing geolocated resources (with more than one item on the same map).

There must be a resource list with filters or search parameters.

### APP Progress
|Task | Progressbar | Todo/Tofix |
|--|--|--|
| A user must be able to register and/or log in |🔵🔵🔵🔵⚪️||
| A user must be able to manage the main resources of the API's  |🔵🔵🔵🔵⚪️||
| A user must be able to create new instances of all the main resources of the domain model |🔵🔵🔵🔵🔵||
| A user must be able to modify at least one of the resources of the domain model |🔵🔵🔵⚪️⚪️||
| A user must be able to delete at least one of the resources of the domain model (e.g. delete a Place in the Travel |🔵🔵🔵⚪️⚪️||
|Geolocation of the user |🔵🔵🔵🔵🔵||
|Travel on map of the user |⚪️⚪️⚪️⚪️⚪️||
|Take picture and publish |🔵🔵⚪️⚪️⚪️||
|Search User/Trip |🔵🔵🔵🔵⚪️||
|Websocket |🔵🔵🔵🔵⚪️||

## Implementation

The app must follow Angular and Ionic best practices.
The app must use an approved API.
Asynchronous code must be correctly handled (e.g. callbacks, promises and/or observables).
The app must provide clear feedback when errors are likely to occur:
When submitting a form (input might be invalid or the API call might fail).
When geolocating the user (it might fail).
Secrets (passwords & keys) must not be committed to the Git repository.
## Presentation

You must provide a presentation for your app. This can be either in the form of a user guide or in the form of a pitch as if it were a real app that you were going to sell. You can choose from the following options (one is enough):

You can present the app in the README or the Wiki of the GitHub repository for the app.
You can make a webcast/video demonstrating or selling your app.
You can provide a tutorial inside the app.
You can use any other presentation tool (subject to approval) but your user guide or pitch must be available online.
You can upload your app to a store (e.g. Google Play), and write the store page as you would for a real app. This last one is kind of tough, and doing it will not get you a better grade. You've been warned
## Delivery
Each group must send an e-mail no later than 21th of january 2020 to Mathias Oberson with:

- The list of group members.
- The link to your source code repository on GitHub.
- The link to your webcast, presentation page or user guide (if it's not in the repository).
