import { Component, OnInit, OnDestroy } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Giphy } from '../../interfaces/giphy';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit, OnDestroy {
  // searchOrScroll will be triggered every time search query has changed or scroll to the bottom of the list has happened
  searchOrScroll = new BehaviorSubject<string>('');
  giphyList: Observable<[Giphy]>;  // obervable that returns list of giphys
  cachedList: Array<Giphy>; // stores the results for infinite scrolling

  searchQuery: string; // search query
  currentPage = 0;  // current page for scrolling. starts from 0

  routeSubscription: Subscription; //

  constructor(private giphyService: GiphyService, private route: ActivatedRoute, private router: Router) { // inject giphy service
    this.giphyList = this.searchOrScroll.pipe(
      // call the service with search and pagination paremeters (query, page)
      switchMap( _ => this.giphyService.getGiphys(this.searchQuery, this.currentPage) ),
      map( results => this.currentPage > 0 ? this.cachedList.concat(results) : results ),  // if scrolled prepend the cached list
      tap( list => this.cachedList = list )  // update the cached list
    );
  }

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(params => this.updateViewFromRoute(params)); // update view if query has changed
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe(); // destroy subscription to prevent memory leak
  }

  // function is triggered when scrolled to the bottom of the list
  nextPage() {
    this.currentPage++; //  increment current page
    this.searchOrScroll.next('');  // trigger the 'giphys' observable to update the list
  }
  search(query) {
    this.router.navigate(['/feed', query], {relativeTo: this.route}); // update query in URL
  }

  updateViewFromRoute(routeParams: ParamMap) {
    this.currentPage = 0; // reset pagination
    this.searchQuery = routeParams.get('query') || '';  // update search query
    this.searchOrScroll.next(''); // trigger the 'giphys' observable to update the list
  }

}
