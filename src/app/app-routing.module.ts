import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesListComponent } from './pictures-list/pictures-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: PicturesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
