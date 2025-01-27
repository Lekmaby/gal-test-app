# GalTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Task

Create a form in Angular such that:

* When the form is opened, it sends a POST request { "action": "params" }, which returns a JSON object containing data about the number of requests (count) and delays (delay) between them.
* Upon clicking the “Send” button, the specified number (count) of parallel POST requests should be sent with the given delay (delay) between them. The request format should be { "action": "process" }.
* Display in a list within the form the request send time and the responses from the backend, with each request-response pair shown as a separate row. Note that the order of responses may not match the order of the requests.
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
