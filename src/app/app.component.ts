import { Component } from '@angular/core';

type Movie = {
  name: String;
  available: number;
  quantity: number;
};
type Movies = Array<Movie>;

@Component({
  selector: 'app-root',
  // template: `<h2>Peliculas</h2>`,
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Peliculas';
  movies: Movies = [
    {
      name: 'Avengers',
      available: 5,
      quantity: 0,
    },
    {
      name: 'Avengers 2',
      available: 5,
      quantity: 0,
    },
    {
      name: 'Avengers 3',
      available: 5,
      quantity: 0,
    },
    {
      name: 'Avengers 4',
      available: 5,
      quantity: 0,
    },
  ];

  addMovieQuantity(movieName: String) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity += 1;
  }

  removeMovieQuantity(movieName: String) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity -= 1;
  }
}
