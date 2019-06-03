import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyComponent } from './components/giphy/giphy.component';
import { GiphysListComponent } from './components/giphys-list/giphys-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GiphyComponent,
    GiphysListComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    GiphyComponent
  ]
})
export class GiphyModule { }
