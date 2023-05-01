import { Movie } from "../api/movies/route";
import MovieCard from "./MovieCard";
import { useMovieManager } from "../store";

interface MovieResultsProps {
	searchResults: Movie[];
}

export default function MovieResults(props: MovieResultsProps) {
	const [bookmarkedMovies, addBookmarkedMovie, removeBookmarkedMovie] =
		useMovieManager("bookmarkedMovies");

	const [watchedMovies, addWatchedMovie, removeWatchedMovie] =
		useMovieManager("watchedMovies");

	const handleBookmarkClick = (movie: Movie) => {
		const isBookmarked = bookmarkedMovies.some(
			(bookmarkedMovie) => bookmarkedMovie.imdbID === movie.imdbID
		);
		if (isBookmarked) {
			removeBookmarkedMovie(movie);
		} else {
			addBookmarkedMovie(movie);
		}
	};

	const handleWatchedClick = (movie: Movie) => {
		const isWatched = watchedMovies.some(
			(watchedMovie) => watchedMovie.imdbID === movie.imdbID
		);
		if (isWatched) {
			removeWatchedMovie(movie);
		} else {
			addWatchedMovie(movie);
		}
	};

	return (
		<ul
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{props.searchResults.map((movie) => (
				<MovieCard
					key={movie.imdbID}
					movie={movie}
					bookmarkedMovies={bookmarkedMovies}
					watchedMovies={watchedMovies}
					handleBookmarkClick={handleBookmarkClick}
					handleWatchedClick={handleWatchedClick}
				/>
			))}
		</ul>
	);
}
