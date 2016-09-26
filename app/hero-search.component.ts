import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
// Import the Observable producer Subject
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls:  ['app/hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

    heroes: Observable<Hero[]>;

    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {}

        /*
         A Subject is a producer of an observable event stream;
            searchTerms produces an Observable of strings, the filter criteria for the name search.

         Each call to search puts a new string into this subject's observable stream by calling next.
         */



    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {

        /*
         |--> debounceTime(300) waits until the flow of new string events pauses for 300 milliseconds
                    before passing along the latest string.
                        We'll never make requests more frequently than 300ms.

         |--> distinctUntilChanged ensures that we only send a request if the filter text changed.
                    There's no point in repeating a request for the same search term.

         |--> switchMap calls our search service for each search term
                    that makes it through the debounce and distinctUntilChanged gauntlet.
                        It cancels and discards previous search observables,
                            returning only the latest search service observable.
         */

        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });



        /*
         The switchMap operator (formerly known as "flatMapLatest") is very clever.

         Every qualifying key event can trigger an http method call.
         Even with a 300ms pause between requests,
         we could have multiple HTTP requests in flight and they may not return in the order sent.

         switchMap preserves the original request order while returning only the observable from the most recent http method call.
         Results from prior calls are canceled and discarded.

         We also short-circuit the http method call and return an observable containing an empty array if the search text is empty.

         Note that canceling the HeroSearchService observable
         won't actually abort a pending HTTP request until the service supports that feature,
         a topic for another day. We are content for now to discard unwanted results.
         */
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
