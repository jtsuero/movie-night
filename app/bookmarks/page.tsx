"use client";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Movie } from "../api/movies/route";
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
		<Stack
			as={Box}
			textAlign={"center"}
			spacing={{ base: 8, md: 14 }}
			py={{ base: 20, md: 36 }}
		>
			<Heading
				fontWeight={600}
				fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
				lineHeight={"110%"}
			>
				<Text as={"span"} color={"red.700"}>
					Bookmarks
				</Text>
			</Heading>
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
		</Stack>
	);
}
