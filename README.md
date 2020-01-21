# Travel-Log
Travel-log is a mobile application that allows you to create and follow a list of trips.
Once registered, each user can create his own travel list and assign each trip one or more places and a descriptive image for each place visited.
In this tutorial we will follow the main functions of Travel-log step by step.

## User managment
To use the application, a user must first create an account with travel-log.

### Create an account
To create an account you need to enter the following information:
- A username
- A password 

[View Register page](https://i.imgur.com/s9hh5hm.jpg)

### Log into travel-log
Once you have created an account you will be redirected to the login page. The same information entered in the registration form must be entered to confirm authentication and access travel-log.

[View Login page](https://i.imgur.com/WcrhS6O.jpg)

### Log out 
To exit the application it is necessary to log out by pressing the "logout" button located at the bottom of the profile management page which we will analyze later.

## Navigation
Travel log is made up of 3 main pages:
- MyTrips (allows you to view your travel list)
- Search (allows you to search and filter every trips and places created by all travelLog users)
- Profile (allows you to manage information about your profile and log out).

[Search Page](https://i.imgur.com/8RjT9lL.jpg) -  
[Profile page](https://i.imgur.com/tGn4wXX.jpg) - 
[MyTrips page](https://i.imgur.com/Xqxkqfb.jpg)


## Trips managment
The most important functionality of Travel-log is the ability to create multiple trips.

### Create a trip
To create a trip, simply press the "+" button located at the bottom right of the "My trips" page.
To be created a trip needs the following:
- A title 
- A description 

[Create trip page](https://i.imgur.com/vh4qwCH.jpg)

### Show a trip
Once the trip has been created it will be displayed in your list thanks to a preview and you can access its content by pressing on the appropriate item.
Viewing a trip consists of 3 parts:
- A preview of the travel map
- The description and title of the trip
- a list of places related to this specific trip

[Show trip page](https://i.imgur.com/XNDkMzs.jpg)

### Edit a trip
At the top left, in the toolbar, there is an icon that will allow us to access the modification of the element. In this mode, we can change the description or the title of the trip, delete one or more places using the "trash" icons next to each place and, if we wish, delete the trip itself by pressing the red button at the bottom right.

## Places managment
In the trip display screen we can add one or more places by simply pressing the "+" button located at the bottom right.
To create a places it is necessary to insert the following information:
- name 
- descriptions 
At the time of creation, Travel-log will automatically detect the position of the device and assign it to the chosen place.

[Create place page](https://i.imgur.com/Ubs2yXi.jpg)

### Wiew place details
By pressing on the map icon associated with each places we will be redirected to the complete view of the map.
By clicking on the photo icon associated with each places we will be redirected to the cover photo of the chosen place.

[Complete map](https://i.imgur.com/6UHsaN8.jpg)
[Cover image](https://i.imgur.com/dec8WSZ.jpg)


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
| A user must be able to register and/or log in |🔵🔵🔵🔵🔵||
| A user must be able to manage the main resources of the API's  |🔵🔵🔵🔵🔵||
| A user must be able to create new instances of all the main resources of the domain model |🔵🔵🔵🔵🔵||
| A user must be able to modify at least one of the resources of the domain model |🔵🔵🔵🔵🔵||
| A user must be able to delete at least one of the resources of the domain model (e.g. delete a Place in the Travel |🔵🔵🔵🔵🔵||
|Geolocation of the user |🔵🔵🔵🔵🔵||
|Multi point on map of the user |🔵🔵🔵🔵⚪️||
|Take picture and publish |🔵🔵🔵🔵⚪️||
|Search User/Trip |🔵🔵🔵🔵🔵||
|Websocket |🔵🔵🔵🔵🔵||
