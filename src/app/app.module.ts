import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyModule } from './giphy/giphy.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GiphyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
