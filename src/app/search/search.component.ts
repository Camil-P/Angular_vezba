import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  movies : Movie[] = [];
  search = '';
  constructor(private movieService : MovieService) { }

  Pretrazi(){
    this.movieService.SearchMovie(this.search).subscribe(x => {
      this.movies = x.Search;
    console.log(this.movies[0].Title)
  });
  }
}
