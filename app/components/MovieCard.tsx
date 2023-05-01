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
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiEyeFill, RiEyeLine } from "react-icons/ri";

import { Movie } from "../api/movies/route";

interface MovieCardProps {
	movie: Movie;
	bookmarkedMovies: Movie[];
	watchedMovies: Movie[];
	handleWatchedClick: (movie: Movie) => void;
	handleBookmarkClick: (movie: Movie) => void;
}

export default function MovieCard(props: MovieCardProps) {
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
								props.handleBookmarkClick(props.movie);
							}}
						>
							<Icon
								as={
									props.bookmarkedMovies.some(
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
							props.watchedMovies.some(
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
								props.handleWatchedClick(props.movie);
							}}
						>
							<Icon
								as={
									props.watchedMovies.some(
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
