import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphysListComponent } from './giphys-list.component';

describe('GiphysListComponent', () => {
  let component: GiphysListComponent;
  let fixture: ComponentFixture<GiphysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
