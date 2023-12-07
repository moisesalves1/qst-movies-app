import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  { 
    path: '', component: ListMoviesComponent
  },
  {
    path: 'movie-detail/:id', component: MovieDetailComponent
  },
  {
    path: 'watch-list', component: WatchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
