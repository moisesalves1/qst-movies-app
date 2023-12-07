import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit{

  public selectedOrder: any = "Order by";

  public moviesList: any = [];

  constructor (
    private service: MovieService
  ) { }

  ngOnInit(): void {
      this.moviesList = this.service.getMovies();
  }

  teste(){
    console.log(this.selectedOrder)
    this.moviesList.sort(this.dynamicSort(this.selectedOrder))
  }
  
  dynamicSort(property: any) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a: any,b: any) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
}
