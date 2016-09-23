import {Component} from '@angular/core';

@Component({
    selector :"app",
    template :`<h1>{{title}}</h1>
               <nav>
    <!--We bind the RouterLink directive (another of the RouterModule directives) 
            to a string that tells the router where to navigate when the user clicks the link.-->
               <a routerLink="/dashboard">Dashboard</a>
               <a routerLink="/heroes">Heroes</a>
               </nav>
    <!--RouterOutlet is one of the directives provided by the RouterModule. 
            The router displays each component immediately below the <router-outlet> as we navigate through the application.-->
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