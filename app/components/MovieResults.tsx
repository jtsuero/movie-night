import { useState } from "react";
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

interface MovieResultsProps {
	searchResults: Movie[];
}

export default function MovieResults(props: MovieResultsProps) {
	const [bookmarkedMovies, setBookmarkedMovies] = useState<string[]>([]);

	const handleBookmarkClick = (movie: Movie) => {
		if (bookmarkedMovies.includes(movie.imdbID)) {
			setBookmarkedMovies(bookmarkedMovies.filter((id) => id !== movie.imdbID));
		} else {
			setBookmarkedMovies([...bookmarkedMovies, movie.imdbID]);
		}
	};

	return (
		<ul
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{props.searchResults.map((movie) => (
				<div key={movie.imdbID}>
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
									onClick={() => handleBookmarkClick(movie)}
								>
									{bookmarkedMovies.includes(movie.imdbID) ? (
										<Icon as={BsBookmarkFill} h={7} w={7} alignSelf='center' />
									) : (
										<Icon as={BsBookmark} h={7} w={7} alignSelf='center' />
									)}
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
								<Image src={movie.Poster} alt='' rounded='lg' />
							</Box>
						</Box>
					</Flex>
				</div>
			))}
		</ul>
	);
}
