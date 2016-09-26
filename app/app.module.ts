// Load the NgModule from the angular core to be used in the declaration of our module
import {NgModule} from '@angular/core';
/* Load the BrowserModule from the angular platform-browser
 (The ng module for the browser because our application is a web application that runs in a browser)
 */
import {BrowserModule} from '@angular/platform-browser';
/* Import the FormsModule for use the forms handler
        like Two-Way data bindings in the HTML input element with [(ngModel)] built-in directive.

 */
import {FormsModule} from '@angular/forms';
/*
Import Angular Http Module that contain providers for the Http service (Web Access).
 */
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';

// Import the routing constant that contain the configured router module.
import {routing} from './app.routing';

/*
 The in-memory web API is a mock service for the Http services.
 */

import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import './rxjs-extensions';




/* The entry point to the application
    The imports array contain the modules that our module depends
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    /* the declarations array contains the list of all components, pipes, and directives
            that we created and that belong in our application's module.
     */
    declarations : [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers : [HeroService],
    bootstrap : [AppComponent]
})
export class AppModule {
    /*
     An Angular Module is a class adorned with the @NgModule decorator function.
     @NgModule takes a metadata object that tells Angular how to compile and run module code.
     It identifies the module's own components, directives and pipes,
     making some of them public so external components can use them.
     It may add service providers to the application dependency injectors.
     */



}