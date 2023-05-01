"use client";
import { useState, useEffect } from "react";
import { Movie } from "./api/movies/route";

export function useMovieManager(
	key: string
): [Movie[], (movie: Movie) => void, (movie: Movie) => void] {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		const storedMovies = localStorage.getItem(key);
		if (storedMovies) {
			setMovies(JSON.parse(storedMovies));
		}
	}, [key]);

	const addMovie = (movie: Movie) => {
		setMovies((prevMovies) => {
			const isExist = prevMovies.some(
				(prevMovie) => prevMovie.imdbID === movie.imdbID
			);
			if (!isExist) {
				const newMovies = [...prevMovies, movie];
				localStorage.setItem(key, JSON.stringify(newMovies));
				return newMovies;
			}
			return prevMovies;
		});
	};

	const removeMovie = (movie: Movie) => {
		setMovies((prevMovies) => {
			const newMovies = prevMovies.filter(
				(prevMovie) => prevMovie.imdbID !== movie.imdbID
			);
			localStorage.setItem(key, JSON.stringify(newMovies));
			return newMovies;
		});
	};

	return [movies, addMovie, removeMovie];
}
