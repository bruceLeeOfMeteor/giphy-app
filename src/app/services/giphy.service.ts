import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// retrieve endpoint configuration (baseUrl, apiKey & etc.).
import { environment } from '../../environments/environment';
import { Giphy } from '../interfaces/giphy';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { } // inject http client service to call endpoints

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
                map( res => res.data || [] ),  // return empty list if no data returned
                map( list => list.map(this.itemToGiphy) ) // convert each item according to Giphy interface
              );
  }
  itemToGiphy = (item: any): Giphy => ({
    imageUrl: (item.images && item.images.original && item.images.original.url) ? item.images.original.url : '',
    title: item.title || ''
  })
}

// TODO: load configs from static json file. According to this guide https://davembush.github.io/where-to-store-angular-configurations/
// TODO: error handling for http
// TODO: placeholder image when url is not found
// TODO: interface for rough data and item
