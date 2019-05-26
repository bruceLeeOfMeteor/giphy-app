import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyComponent } from './giphy.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

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
});

@Component({ selector: 'app-giphys-list', template: '' })
class GiphysListStubComponent {}

@Component({ selector: 'app-search-box', template: '' })
class SearchBoxStubComponent {}

// TODO: implement unit tests
