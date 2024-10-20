import { useEffect, useState } from "react";

const KEY = process.env.REACT_APP_OMDB_API_KEY;


export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setisLoading(true);
          setError("");
          setMovies([]);
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (e) {
          setError(e.message);
          if (e.name !== "AbortError") {
            setError(e.message);
          }
        } finally {
          setisLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
    //   handleCloseMovie();
      fetchMovies();
    },
    [query]
  );

  return {movies,isLoading,error};
}
 