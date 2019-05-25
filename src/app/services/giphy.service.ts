import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// retrieve endpoint configuration (baseUrl, apiKey & etc.).
// TODO: load configs from static json file. According to this guide https://davembush.github.io/where-to-store-angular-configurations/
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  // inject http client service to call endpoints
  constructor(private http: HttpClient) { }

  // hit endpoint with parameters and return Observable
  getGiphys(query?: string, page?: number, limit?: number, rating?: string, lang?: string): Observable<any> {
    const env = environment.config.giphy;
    // compose endpoint url with params accordin to https://developers.giphy.com/docs/#operation--gifs-search-get
    const endpointUrl = `${env.baseUrl}?api_key=${env.apiKey}`  // set apiKey
                          + `&q=${query || ''}` // search query
                          + `&offset=${(page || 0) * (limit || env.limit)}` // offset for pagination
                          + `&limit=${limit || env.limit}`  // number of results per page
                          + `&rating=${rating || env.rating}` // filters results by specified rating
                          + `&lang=${lang || env.lang}`;  // default language
    return this.http.get<any>(endpointUrl).pipe(
                map( res => res.data || [] )  // return empty list if no data returned
              );
    // TODO: error handling
  }
}
