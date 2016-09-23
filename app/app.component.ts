import {Component} from '@angular/core';

@Component({
    selector :"app",
    template :`<h1>{{title}}</h1>
               <a routerLink="/heroes">Heroes</a>
               <router-outlet></router-outlet>`
})

/*
 The Angular router is an external, optional Angular NgModule called RouterModule.
    The router is a combination of multiple provided services (RouterModule),
        multiple directives (RouterOutlet, RouterLink, RouterLinkActive), and a configuration (Routes).
 */





export class AppComponent {
    title = 'Tour of Heroes';

}