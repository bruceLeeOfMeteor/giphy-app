import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphyComponent } from './giphy/components/giphy/giphy.component';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: GiphyComponent },
  { path: 'feed/:query', component: GiphyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
