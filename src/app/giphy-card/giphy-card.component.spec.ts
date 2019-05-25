import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyCardComponent } from './giphy-card.component';

describe('GiphyCardComponent', () => {
  let component: GiphyCardComponent;
  let fixture: ComponentFixture<GiphyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
