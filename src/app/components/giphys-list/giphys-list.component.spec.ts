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

  it('should display title', async(() => {
    component.items = [{
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: 'game of thrones judging you GIF'
      }];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h5').innerText).toEqual('game of thrones judging you GIF');
  }));

  it('should display image', async(() => {
    component.items = [{
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: ''
      }];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').src).toEqual('https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif');
  }));

  it('should display right amount of items', async(() => {
    component.items = [{
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: 'title 1'
      }, {
        imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif',
        title: 'title 2'
    }];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.card').length).toEqual(2);
  }));

});
