import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy, OnChanges {
  @Input() queryFromRoute: string;
  @Output() searched = new EventEmitter<string>();

  query = new FormControl('');  // search query form control
  formSubscription: Subscription; //

  ngOnInit() {
    // update searchbox value if query in route has changed
    // debounceTime(500) => set debounce time to 500 milliseconds
    // distinctUntilChanged() => only when the search query changes
    this.formSubscription = this.query.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
                                                   .subscribe(query => this.onQueryChanged(query));  // emit search query
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();  // destroy subscriptions to prevent memory leak
  }
  ngOnChanges(changes: SimpleChanges) {
    // update the value of the search box from parent
    const {queryFromRoute} = changes;
    if (queryFromRoute.currentValue && this.query.value !== queryFromRoute.currentValue) {
      this.query.setValue(queryFromRoute.currentValue);
    }
  }
  onQueryChanged(query: string) {
    this.searched.emit(query);
  }

}
