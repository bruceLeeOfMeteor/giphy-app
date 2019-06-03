import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';

import { GiphyService } from './giphy.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GiphyService]
  }));

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });

  describe('#getGiphys', () => {
    it('should return an Observable<Giphy[]>', () => {
      const service: GiphyService = TestBed.get(GiphyService);
      const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
      const env = environment.config.giphy;
      const dummyItems = [
        { imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif', title: 'title 1'},
        { imageUrl: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif', title: 'title 2'}
      ];
      const dummyRawData = [
        { images: {original: {url: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif'}}, title: 'title 1'},
        { images: {original: {url: 'https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif'}}, title: 'title 2'}
      ];

      service.getGiphys().subscribe(items => {
        expect(items.length).toBe(2);
        expect(items).toEqual(dummyItems);
      });
      const req = httpMock.expectOne(`${env.baseUrl}?api_key=${env.apiKey}`
                                      + `&q=&offset=0&limit=${env.limit}&rating=${env.rating}&lang=${env.lang}`);

      expect(req.request.method).toBe('GET');
      req.flush({data: dummyRawData});
    });
  });

});
