import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Storage } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  public watchList: Movie[] = []

  ngOnInit(): void {
      this.getWatchlist();
  }

  removeItem(movie: Movie){
    Storage.removeMovie(movie);
    this.getWatchlist();
  }
  
  getWatchlist(){
    this.watchList = Storage.get();
  }

}
