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

  it('should display title', () => {
    component.items = [{
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: 'game of thrones judging you GIF'
      }];

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h5').innerText).toEqual('game of thrones judging you GIF');
  });

  it('should set image scr', () => {
    component.items = [{
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: ''
      }];

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('img').src).toEqual('https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif');
  });

  it('should display the right amount of items', () => {
    component.items = [{
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: 'title 1'
      }, {
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: 'title 2'
    }];

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.card').length).toEqual(2);
  });

  it('should display not items if an empty array has been passed', () => {
    component.items = [];

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.card').length).toEqual(0);
  });

  it('should emit scrolled when scroll() function is called', () => {
    let count = 0;
    component.scrolled.subscribe(_ => { count++; });

    component.scroll();

    expect(count).toBe(1);
  });

});
