// 	title: "Movie Night",
// 	description: "What you watching?",
// };
"use client";
import { useState } from "react";
import { Movie, searchMoviesByTitle } from "./api/movies/route";
import SearchBar from "./components/SearchBar";
import MovieResults from "./components/MovieResults";

export default function Home() {
	const [searchResults, setSearchResults] = useState<Movie[]>([]);

	const handleSearch = async (movieName: string) => {
		const results: Movie[] | undefined = await searchMoviesByTitle(movieName);
		if (results) setSearchResults(results);
	};

	//state to select current movie

	//need component for search results.
	//nice to have to build out modal with more results for movie
	//loading component while waiting on results
	//when choosing items, should have bookmark ability
	//create 'watched' for bookmarked movies only
	return (
		<>
			<SearchBar handleSearch={handleSearch} />
			<MovieResults searchResults={searchResults} />
		</>
	);
}
