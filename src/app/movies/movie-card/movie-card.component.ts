import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Storage } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie = {};

  constructor(
  ) {  }

  ngOnInit(): void {
  }

  addToWatchlist(movie: Movie) {
    Storage.addMovie(movie);
  }

  removeFromWatchlist(movie: Movie) {
    Storage.removeMovie(movie)
  }

  isInWatchlist(movie: Movie): boolean{
    for(let item of Storage.get()){
      if(item.Id === movie.Id) return true
    }
    return false
  }

}
