import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieModule } from './movie/movie.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) },
  { path : 'movie', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
