import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Output() searched = new EventEmitter<string>();

  query = new FormControl('');  // search query form control
  formSubscription: Subscription; //

  constructor() { }

  ngOnInit() {
    this.formSubscription = this.query.valueChanges.pipe(
      debounceTime(500),  // set debounce time to 500 milliseconds
      distinctUntilChanged()  // only when the search query changes
    ).subscribe(query => {
      this.searched.emit(query);  // emit search query
    });
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();  // destroy subscription to prevent memory leak
  }

}
