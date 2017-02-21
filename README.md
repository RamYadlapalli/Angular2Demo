
# Angualr 2 - Concepts:

## Getting Started 

1. Creating a component:

       The simplest way to create a new component is again to use the Angular CLI. The Angular CLI can quickly generate components for you to use inside your modules and your templates

2. Managing Angular elements with Events and Refs:
    
       Angular 2 provides powerful template syntax to access events and elements inside of your Component's class.

3. Control Angular 2 Events with $event and Event Handlers

       Passign custom events using parens-based (click) syntax

4. Share Services and Data with Angular 2 Dependency Injection:

       The Angular CLI generates Services using a simple command. After your Service is generated, you can easily provide and share it to the rest of your application using Angular 2's Dependency Injection.

5. Provide and Share Values with Angular 2 Dependency Injection:

       If you want to Inject a Service without using TypeScript, you’ll need to understand the @Inject decorator. The @Inject decorator also allows you to provide any value or object that you need to share throughout your application without having to create a service.

6. Loop Through Angular 2 Components with ngFor:

       *ngFor. It’s conceptually the same as Angular 1’s ng-repeat, but you’ll find the syntax quite different as it aligns with #refs in Angular 2 and JavaScript “for of” loop.

7. Pass Values into Angular 2 Components with @Input:

       @Input allows you to pass data into your controller and templates through html and defining custom properties. This allows you to easily reuse components and have them display different values for each instance of the renderer.

8. Sync Values from Inputs with Angular 2’s ngModel Two-Way Binding:
    
       Two-way binding still exists in Angular 2 and ngModel makes it simple. The syntax is a combination of the [input] and (output) syntax to represent that the data is being pushed out and pulled in.

9. Pass Events from Angular 2 Components with @Output: 

       Components push out events using a combination of an @Output and an EventEmitter. This allows a clean separation between reusable Components and application logic.

10. CSS Inside of Angular 2 Components    

       Many Components require different styles based on a set of conditions. Angular 2 helps you style your Components by allows you to define CSS and styles inline, then choosing which styles to use based on the current values in your Controller.

11. Use Global CSS Inside Angular 2 Components

       Global CSS and stylesheets are also available to Angular 2 Components even though the styles you define inline will remain isolated to the Component itself. You can customize this behavior using ViewEncapsulation if you need to keep global styles out of your Components.
