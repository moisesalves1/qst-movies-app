import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieDetailComponent,
    MovieCardComponent,
    WatchListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ]
})
export class MoviesModule { }
