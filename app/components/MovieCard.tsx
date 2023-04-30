import { useEffect, useState } from "react";
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

	const handleBookmarkClick = (movie: Movie) => {
		const isBookmarked = bookmarkedMovies.some(
			(bookmarkedMovie) => bookmarkedMovie.imdbID === movie.imdbID
		);

		if (isBookmarked) {
			const newBookmarkedMovies = bookmarkedMovies.filter(
				(bookmarkedMovie) => bookmarkedMovie.imdbID !== movie.imdbID
			);
			setBookmarkedMovies(newBookmarkedMovies);
			localStorage.setItem(
				"bookmarkedMovies",
				JSON.stringify(newBookmarkedMovies)
			);
		} else {
			const newBookmarkedMovies = [...bookmarkedMovies, movie];
			setBookmarkedMovies(newBookmarkedMovies);
			localStorage.setItem(
				"bookmarkedMovies",
				JSON.stringify(newBookmarkedMovies)
			);
		}
	};

	console.log(props.movie, "test movie");
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
