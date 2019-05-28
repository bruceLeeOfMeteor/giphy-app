import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyComponent } from './giphy.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ParamMap } from '@angular/router';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        GiphyComponent,
        GiphysListStubComponent,
        SearchBoxStubComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#nextPage', () => {
    it('should increment current page', () => {
      const page = component.currentPage;

      component.nextPage();

      expect(component.currentPage).toBe(page + 1);
    });

    it('should trigger searchOrScroll Observable to fire second event', () => {
      let eventCount = 0;

      component.searchOrScroll.subscribe((_) => eventCount++);
      component.nextPage();

      expect(eventCount).toBe(2);
    });

  });

  describe('#updateViewFromRoute', () => {
    it('should reset current page', () => {
      component.currentPage = 1;

      component.updateViewFromRoute( { get: (v: string): string => v } as ParamMap ) ;

      expect(component.currentPage).toBe(0);
    });

    it('should trigger searchOrScroll Observable to fire second event', () => {
      let eventCount = 0;

      component.searchOrScroll.subscribe((_) => eventCount++);
      component.updateViewFromRoute( { get: (v: string): string => v } as ParamMap ) ;

      expect(eventCount).toBe(2);
    });

    it('should assign query route parameter to searchQuery', () => {
      component.updateViewFromRoute( { get: (v: string): string => v } as ParamMap ) ;
      expect(component.searchQuery).toBe('query');
    });
  });

  describe('#ngOnInit', () => {
    it('should initialize subscription', () => {
      expect(component.routeSubscription).toBeDefined();
      expect(component.routeSubscription.closed).toBe(false);
    });
  });
  describe('#ngOnDestroy', () => {
    it('should close subscription', () => {
      expect(component.routeSubscription).toBeDefined();
      expect(component.routeSubscription.closed).toBe(false);

      component.ngOnDestroy();

      expect(component.routeSubscription.closed).toBe(true);
    });
  });

});

@Component({ selector: 'app-giphys-list', template: '' })
class GiphysListStubComponent {}

@Component({ selector: 'app-search-box', template: '' })
class SearchBoxStubComponent {}

// TODO: implement unit tests for search();
