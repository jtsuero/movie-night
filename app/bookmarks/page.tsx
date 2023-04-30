"use client";
import { useEffect, useState } from "react";
import { Movie, searchMoviesByID } from "../api/movies/route";
import MovieCard from "../components/MovieCard";

export default function Bookmarks() {
	const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>([]);
	const [movieList, setMovieList] = useState<Movie[]>([]);

	useEffect(() => {
		const bookmarkedMoviesFromLocalStorage = JSON.parse(
			localStorage.getItem("bookmarkedMovies") || "[]"
		);
		setBookmarkedMovies(bookmarkedMoviesFromLocalStorage);
	}, []);

	console.log(bookmarkedMovies, "test bookmark");
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
			{bookmarkedMovies.map((movie) => (
				<MovieCard key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
}
