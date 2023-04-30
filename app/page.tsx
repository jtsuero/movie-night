// 	title: "Movie Night",
// 	description: "What you watching?",
// };
"use client";
import { useState } from "react";
import { Movie, searchMoviesByTitle } from "./api/movies/route";
import SearchBar from "./components/SearchBar";

export default function Home() {
	const [searchResults, setSearchResults] = useState<Movie[]>([]);

	const handleSearch = async (movieName: string) => {
		const results: Movie[] | undefined = await searchMoviesByTitle(movieName);
		if (results) setSearchResults(results);
	};

	//need component for search results.
	return (
		<>
			<SearchBar handleSearch={handleSearch} />
			<ul>
				{searchResults.map((movie) => (
					<li key={movie.imdbID}>{movie.Title}</li>
				))}
			</ul>
		</>
	);
}
