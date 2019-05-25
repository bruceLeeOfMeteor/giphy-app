import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GiphysListComponent } from './components/giphys-list/giphys-list.component';
import { GiphyComponent } from './components/giphy/giphy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphysListComponent,
    GiphyComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
