// Import the Component decorator
import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector : "heroes",
    styleUrls : ['app/heroes.component.css'],
    // Using of Template Strings feature of ES6 with ``
    templateUrl : 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
    // The component class the define the behaviour & the manipulation of the component View
    selectedHero : Hero;

    heroes : Hero[];

    constructor(
        private heroService : HeroService,
        private route : Router){
        /* The constructor is for simple initializations like wiring constructor parameters to properties.
                It's not for heavy lifting so for the heavy jobs we can use the Lifecycle Hooks.
         */
    }

     onSelect(hero : Hero) : void {
        this.selectedHero = hero;
    }

    /* The implementation of the ngOnInit hook method of the interface "OnInit".
            OnInit for the component creation moment.
     */
    ngOnInit() : void  {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail() : void {
        let link =['/detail',this.selectedHero.id];
        this.route.navigate(link);
    }

    /*
     When the given name is non-blank,
        the handler delegates creation of the named hero to the hero service,
            and then adds the new hero to our array.
     */
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }



}