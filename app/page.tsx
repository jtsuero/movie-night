// 	title: "Movie Night",
// 	description: "What you watching?",
// };
"use client";
import { useState } from "react";
import { Movie, searchMoviesByTitle } from "./api/movies/route";
import SearchBar from "./components/SearchBar";

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<Movie[]>([]);

	const handleSearch = async (movieName: string) => {
		const results = await searchMoviesByTitle(movieName);
		if (results) setSearchResults(results);
	};

	return (
		<>
			<SearchBar handleSearch={handleSearch} />
		</>
	);
}
