"use client";
import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Movie } from "../api/movies/app/api/search/[title]";
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
				{bookmarkedMovies.length > 0 ? (
					<Text fontSize={25} fontFamily={"monospace"}>
						Bookmarks
					</Text>
				) : (
					<Stack>
						<Text fontSize={25} fontFamily={"monospace"}>
							Hmm...doesn't look like you've bookmarked anything yet.
						</Text>
						<Button
							as={Link}
							href='/'
							colorScheme={"blue"}
							bg={"blue.400"}
							rounded={"full"}
							px={6}
							_hover={{
								bg: "blue.500",
							}}
							type='submit'
						>
							Go to search
						</Button>
					</Stack>
				)}
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
