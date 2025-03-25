import { useEffect, useState } from "react";
import { Search } from "./Search";
import { NumResults } from "./NumResults";
import { Navbar } from "./Navbar";
import { Box } from "./Box";
import { MovieList } from "./MovieList";
import { WatchedMovieList } from "./WatchedMovieList";
import { WatchedSummary } from "./WatchedSummary";
import { MovieDetails } from "./MovieDetails";

function Main({ children }) {
  return <main className="main">{children}</main>;
}

export function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}

export const KEY = "7f8622c3";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useState(function() {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    const isMovieAlreadyWatched = watched.some(
      (watchedMovie) => watchedMovie.imdbID === movie.imdbID
    );
    if (isMovieAlreadyWatched) {
      setWatched(
        watched.map((watchedMovie) =>
          watchedMovie.imdbID === movie.imdbID
            ? { ...watchedMovie, userRating: movie.userRating }
            : watchedMovie
        )
      );
      return;
    }
    setWatched(watched=>[...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handeDeleteWatched(id) {
    setWatched(watched.filter(movie => movie.imdbID !== id));
  }

  useEffect(function () {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);
  


  useEffect(function () { 
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${KEY}`, 
          { signal: controller.signal }
        );

        if (!res || !res.ok) 
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if(data.Response === "False") throw new Error(`Movie not found: "${query}"`);

        setMovies(data.Search);
        setError("");
      } catch (err) {
          let message;
          if (err.name !== "AbortError") {
            message = err.message;
            console.log(message);
            setError(message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      
      handleCloseMovie();
      fetchMovies();

      return function() {
        controller.abort();
      }
    },
    [query]
  );
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/*isLoading ? <Loader /> : <MovieList movies={movies} />*/}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList 
              movies={movies}
              onSelectMovie={handleSelectMovie} 
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          { selectedId ? 
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          :
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList 
              watched={watched} 
              onDeleteWatched={handeDeleteWatched}
            />
          </>
          }
        </Box>
      </Main>
    </>
  );
}
