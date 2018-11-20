# AssettvTechTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). *Currently no Unit Tests have been implemented but can be done in the future*

## TO DO

* Application is currently incomplete. Service layer has been created to call the API Json feed. Which can currently retrieve the JSON feed via a GET method. This needs to be expanded to allow for the results to be filtered by the TAB ID. 

* Need creation of a search service that will search on the collected results based on either people or terms and update the data to show updated version in the view.

* Data to be binded to view and create ngfor loop to iterate through list of videos and dynamically create grid

* Bootstrap model needs to be implemented to allow for each video modal pop up

## Improvements or suggestions 

* Implement lazy image loading using Lozad.js (NPM package)

* Compatabitie across browsers and different sizes. May also need to consider polyfil for the API for older browsers

* Karma unit testing.



