import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {
  // searchOrScroll will be triggered every time search query has changed or scroll to the bottom of the list has happened
  searchOrScroll = new BehaviorSubject<string>('');
  giphyList: Observable<any>;  // obervable that returns list of giphys
  cachedList = []; // stores the results for infinite scrolling
  currentPage = 0;  // current page for scrolling. starts from 0

  constructor(private giphyService: GiphyService) { // inject giphy service
    this.giphyList = this.searchOrScroll.pipe(
      // call the service with search and pagination paremeters (query, page)
      switchMap( _ => this.giphyService.getGiphys('burgers', this.currentPage) ),
      map( results => this.currentPage > 0 ? this.cachedList.concat(results) : results ),  // if scrolled prepend the cached list
      tap( list => this.cachedList = list )  // update the cached list
    );
  }

  ngOnInit() {
  }

  // function is triggered when scrolled to the bottom of the list
  nextPage() {
    this.currentPage++; //  increment current page
    this.searchOrScroll.next(''); // trigger the 'giphys' observable to update the list
    console.log(`load page ${this.currentPage}`);  // log current page for debugging [TO_BE_DELETED]
  }

}
