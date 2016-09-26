import {Injectable} from '@angular/core';
import {Hero} from './hero';
// Import the Http Service from Angular Http library
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes'; // Url to Web API

    constructor(private http : Http){}

    getHeroes() : Promise<Hero[]> {

        return this.http.get(this.heroesUrl)
            .toPromise()
            // Convert the response to Hero[]
            .then(response => response.json().data as Hero[]);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 5000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
    getHero(id : number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }


}