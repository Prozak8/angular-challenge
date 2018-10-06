# Weekend Challenge
* Updated Angular version 6.2.4 => 6.4.1
* Understanding the basics of Angular with YouTube reference

# Questions:
* Where in the file structure is the component file located?
The component file is located src > app.

* What is the decorator and what information does the decorator have?
The decorator is a tag e.g @NgModule. It contains information in the form of properties such as declarations, imports, providers and bootstrap. Providers are values, functions or features the app needs. Declarations are components. Components are similar to partials in the sense that they control a segment of the app. They also contain a brief summary of what it is bringing in known as a decorator.

* Where is the template file located? Now add a paragraph with your name in the template.
OK.

* How do we add our component to a view?
ng generate component NAME or ng g c NAME

* Can we add our component to the index file?
If you import it. [WIP]

* Is it possible to add the component to the app.component.html file?
I think only if you import it. [WIP]


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
