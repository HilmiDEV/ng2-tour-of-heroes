import {Injectable} from '@angular/core';
import {Hero} from './hero';
// Import the Http Service from Angular Http library
import {Headers, Http} from "@angular/http";

// Add the Reactive Extensions operator toPromise to add capabilities with the Observables.
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes'; // Url to Web API
    // The headers object that contain the Http headers data.
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http : Http){}

    getHeroes() : Promise<Hero[]> {

        return this.http.get(this.heroesUrl)
            .toPromise()
            // In the promise's then callback we call the json method of the HTTP Response to extract the data within the response.
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);

        /*
         Pay close attention to the shape of the data returned by the server.
         This particular in-memory web API example happens to return an object with a data property.
         Your API might return something else. Adjust the code to match your web API.
         */
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 5000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
    getHero(id : number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    update(hero: Hero): Promise<Hero> {

        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }






}