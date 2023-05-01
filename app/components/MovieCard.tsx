"use client";
import {
	Box,
	Flex,
	Icon,
	Image,
	Tooltip,
	chakra,
	useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiEyeFill, RiEyeLine } from "react-icons/ri";

import { Movie } from "../api/movies/route";

interface MovieCardProps {
	movie: Movie;
}

export default function MovieCard(props: MovieCardProps) {
	const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>(() => {
		const storedBookmarkedMovies = localStorage.getItem("bookmarkedMovies");
		if (storedBookmarkedMovies) {
			return JSON.parse(storedBookmarkedMovies);
		}
		return [];
	});

	const [watchedMovies, setWatchedMovies] = useState<Movie[]>(() => {
		const storedWatchedMovies = localStorage.getItem("watchedMovies");
		if (storedWatchedMovies) {
			return JSON.parse(storedWatchedMovies);
		}
		return [];
	});

	const handleBookmarkClick = (movie: Movie) => {
		setBookmarkedMovies((prevBookmarkedMovies) => {
			const isBookmarked = prevBookmarkedMovies.some(
				(bookmarkedMovie) => bookmarkedMovie.imdbID === movie.imdbID
			);
			if (isBookmarked) {
				const newBookmarkedMovies = prevBookmarkedMovies.filter(
					(bookmarkedMovie) => bookmarkedMovie.imdbID !== movie.imdbID
				);
				localStorage.setItem(
					"bookmarkedMovies",
					JSON.stringify(newBookmarkedMovies)
				);
				return newBookmarkedMovies;
			} else {
				const newBookmarkedMovies = [...prevBookmarkedMovies, movie];
				localStorage.setItem(
					"bookmarkedMovies",
					JSON.stringify(newBookmarkedMovies)
				);
				return newBookmarkedMovies;
			}
		});
	};

	const handleWatchedClick = (movie: Movie) => {
		setWatchedMovies((prevWatchedMovies) => {
			const isWatched = prevWatchedMovies.some(
				(watchedMovie) => watchedMovie.imdbID === movie.imdbID
			);
			if (isWatched) {
				const newWatchedMovies = prevWatchedMovies.filter(
					(watchedMovie) => watchedMovie.imdbID !== movie.imdbID
				);
				localStorage.setItem("watchedMovies", JSON.stringify(newWatchedMovies));
				return newWatchedMovies;
			} else {
				const newWatchedMovies = [...prevWatchedMovies, movie];
				localStorage.setItem("watchedMovies", JSON.stringify(newWatchedMovies));
				return newWatchedMovies;
			}
		});
	};

	return (
		<div key={props.movie.imdbID}>
			<Flex p={50} w='full' alignItems='center' justifyContent='center'>
				<Box maxW='sm' rounded='lg' shadow='lg' position='relative'>
					<Tooltip
						label='Bookmark'
						bg='white'
						placement={"top"}
						color={"gray.800"}
						fontSize={"1.2em"}
					>
						<chakra.a
							href={"#"}
							display={"flex"}
							position='absolute'
							top={3}
							right={2}
							zIndex={1}
							color={"white"}
							onClick={(e) => {
								e.preventDefault();
								handleBookmarkClick(props.movie);
							}}
						>
							<Icon
								as={
									bookmarkedMovies.some(
										(bookmarkedMovie) =>
											bookmarkedMovie.imdbID === props.movie.imdbID
									)
										? BsBookmarkFill
										: BsBookmark
								}
								h={7}
								w={7}
								alignSelf={"center"}
							/>
						</chakra.a>
					</Tooltip>
					<Tooltip
						label={
							watchedMovies.some(
								(watchedMovie) => watchedMovie.imdbID === props.movie.imdbID
							)
								? "Mark as unwatched"
								: "Mark as watched"
						}
						bg='white'
						placement={"top"}
						color={"gray.800"}
						fontSize={"1.2em"}
					>
						<chakra.a
							href={"#"}
							display={"flex"}
							position='absolute'
							top={3}
							left={2}
							zIndex={1}
							color={"white"}
							onClick={(e) => {
								e.preventDefault();
								handleWatchedClick(props.movie);
							}}
						>
							<Icon
								as={
									watchedMovies.some(
										(watchedMovie) => watchedMovie.imdbID === props.movie.imdbID
									)
										? RiEyeFill
										: RiEyeLine
								}
								h={7}
								w={7}
								alignSelf={"center"}
							/>
						</chakra.a>
					</Tooltip>
					<Box
						bg={useColorModeValue("white", "gray.800")}
						maxW='sm'
						borderWidth='1px'
						rounded='lg'
						shadow='lg'
						position='relative'
					>
						<Image src={props.movie.Poster} alt='' rounded='lg' />
					</Box>
				</Box>
			</Flex>
		</div>
	);
}
