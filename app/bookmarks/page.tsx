"use client";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Movie } from "../api/movies/route";
import MovieCard from "../components/MovieCard";
import { useMovieManager } from "../store";

export default function Bookmarks() {
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
		</Stack>
	);
}
