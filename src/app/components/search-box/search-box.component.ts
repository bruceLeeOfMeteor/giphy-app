import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output() searched = new EventEmitter<string>();

  query = new FormControl('');  // search query form control
  formSubscription: Subscription; //
  routeSubscription: Subscription; //

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // update searchbox value if query in route has changed
    this.routeSubscription = this.route.paramMap.subscribe(params => this.query.setValue(params.get('query')));
    this.formSubscription = this.query.valueChanges.pipe(
      debounceTime(500),  // set debounce time to 500 milliseconds
      distinctUntilChanged()  // only when the search query changes
    ).subscribe(query => {
      this.searched.emit(query);  // emit search query
    });
  }
  ngOnDestroy() {
    // destroy subscriptions to prevent memory leak
    this.routeSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }

}
