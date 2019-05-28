import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchBoxComponent
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onQueryChanged when search query has changed', fakeAsync(() => {
    spyOn(component, 'onQueryChanged');

    component.query.setValue('kittens');
    tick(500);  // wait for debounce 500

    expect(component.onQueryChanged).toHaveBeenCalled();
  }));

  it('should emit searched when onQueryChanges() function is called', () => {
    const query = 'abc';
    let count = 0;
    component.searched.subscribe(value => {
      count++;
      expect(value).toBe(query);
     });

    component.onQueryChanged(query);

    expect(count).toBe(1);
  });

  // TODO: Set query from route
});
