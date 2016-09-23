import {Component} from '@angular/core';

@Component({
    selector :"app",
    styleUrls :['app/app.component.css'],
    template :`<h1>{{title}}</h1>
               <nav>
    <!--We bind the RouterLink directive (another of the RouterModule directives) 
            to a string that tells the router where to navigate when the user clicks the link.-->
            <!--The Angular Router provides a routerLinkActive directive.
                we can use to add a class to the HTML navigation element whose route matches the active route.-->
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
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