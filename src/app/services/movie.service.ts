import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private data: Movie[] = DATA;

  constructor() { }

  getMovies() {
    return this.data;
  }

  getMovieById(id: number) {
    return this.data.find(x => x.Id === id)
  }
  
}
