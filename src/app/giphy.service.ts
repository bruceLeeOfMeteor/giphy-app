import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// retrieve configuration (baseUrl & apiKey).
// TODO: load configs from static json file. According to this guide https://davembush.github.io/where-to-store-angular-configurations/
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  // inject http client service to call endpoints
  constructor(private http: HttpClient) { }

  // hit endpoint with parameters and return Observable
  getImages(query?: string, offset?: number, limit?: number, rating?: string, lang?: string): Observable<any> {
    // compose endpoint url with params
    const endpointUrl = `${environment.config.giphy.baseUrl}?api_key=${environment.config.giphy.apiKey}`
                        + `&q=${query || ''}&offset=${offset || 0}&limit=${limit || 5}&rating=${rating || 'G'}&lang=${lang || 'en'}`;
    return this.http.get<any>(endpointUrl).pipe(
                map( res => res.data || [] )
              );
  }
}
