import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { Storage } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  public selectedId?: number;
  public movie$?: any;
  public urlSafe?: SafeResourceUrl;

  constructor(
    private service: MovieService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

    ngOnInit(): void {
      this.selectedId = Number(this.route.snapshot.params['id']);
      this.movie$ = this.service.getMovieById(this.selectedId)
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie$.TrailerLink);
    }

    getGenres(genres: string[]){
      let strGenres = "";
      for(let i = 0; i < genres.length; i++) {
        strGenres += (i<genres.length-1) ?  `${genres[i]} | ` : genres[i]
      }
      return strGenres
    }

    isInWatchlist(movie: Movie): boolean{
      for(let item of Storage.get()){
        if(item.Id === movie.Id) return true
      }
      return false
    }

    addToWatchlist(movie: Movie) {
      Storage.addMovie(movie);
    }
  
    removeFromWatchlist(movie: Movie) {
      Storage.removeMovie(movie)
    }

    toggle(){
      this.verifyChecked() ? this.removeFromWatchlist(this.movie$) : this.addToWatchlist(this.movie$)
    }

    verifyChecked(): boolean {
      return this.isInWatchlist(this.movie$)
    }
}
