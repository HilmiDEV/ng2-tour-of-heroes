import {ModuleWithProviders} from '@angular/core';

/*
    The Routes are an array of route definitions.
        The RouterModule is a module to handle the routes.
 */
import {Routes, RouterModule} from '@angular/router';

// Import the components that used for each rout
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';

/*
    Array contain the routes definitions.
 */
const appRoutes : Routes = [
    {
        path : 'heroes',
        component : HeroesComponent
    },
    {
        path : 'dashboard',
        component : DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path : 'detail/:id',
        component : HeroDetailComponent
    }
];

/*
 We'll export a routing constant initialized using the RouterModule.forRoot method applied to our array of routes.
        This method returns a configured router module.
 */
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);

/*
    We call the forRoot method because we're providing a configured router at the root of the application.
            The forRoot method gives us the Router service providers and directives needed for routing.
 */

