"use client";
import { useState } from "react";
import {
	Movie,
	searchMoviesByTitle,
} from "./api/movies/app/api/search/[title]";
import SearchBar from "./components/SearchBar";
import MovieResults from "./components/MovieResults";

export default function Home() {
	const [searchResults, setSearchResults] = useState<Movie[]>([]);

	const handleSearch = async (movieName: string) => {
		const results: Movie[] | undefined = await searchMoviesByTitle(movieName);
		if (results) setSearchResults(results);
	};

	return (
		<>
			<SearchBar handleSearch={handleSearch} />
			<MovieResults searchResults={searchResults} />
		</>
	);
}
