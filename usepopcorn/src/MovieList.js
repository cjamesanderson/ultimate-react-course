import { Movie } from "./Movie";

export function MovieList({ movies, onSelectMovie, onDeleteWatched }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
          onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
