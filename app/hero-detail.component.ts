import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {Hero} from './hero';

/*
    The ActivatedRoute is a service to get route activated
    Params is observable to extract the params values from the Url (route).
 */
import {ActivatedRoute, Params} from '@angular/router';

import {HeroService} from './hero.service';


@Component({
    selector : "my-hero-detail",
    templateUrl : "app/hero-detail.component.html"
})
export class HeroDetailComponent implements OnInit{
    @Input()
    hero : Hero;
    constructor (
        private route : ActivatedRoute,
        private heroService : HeroService) {

    }

    // The lifecycle hook ngOnInit
    ngOnInit() : void {

        // Notice how we extract the id by calling the forEach method which will deliver our array of route parameters.
        this.route.params.forEach((params : Params) => {
            /* The hero id is a number.
                 Route parameters are always strings.
                    So we convert the route parameter value to a number with the JavaScript (+) operator.
             */
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });

    }

    // The method of the back
    goBack(): void {
        window.history.back();
    }


}