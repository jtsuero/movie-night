"use client";
import { searchMoviesByTitle, Movie } from "./api/movies/route";

// export const metadata = {
// 	title: "Movie Night",
// 	description: "What you watching?",
// };

import { useState } from "react";

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<Movie[]>([]);

	const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const results = await searchMoviesByTitle(searchQuery);
		console.log(results, "results");
		if (results) setSearchResults(results);
	};

	return (
		<>
			<form onSubmit={handleSearch}>
				<input
					type='text'
					value={searchQuery}
					onChange={(event) => setSearchQuery(event.target.value)}
				/>
				<button type='submit'>Search</button>
			</form>

			<ul>
				{searchResults.map((movie) => (
					<li key={movie.imdbID}>{movie.Title}</li>
				))}
			</ul>
		</>
	);
}
