import { Movie } from "../api/movies/route";
import MovieCard from "./MovieCard";

interface MovieResultsProps {
	searchResults: Movie[];
}

export default function MovieResults(props: MovieResultsProps) {
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
				<MovieCard movie={movie} />
			))}
		</ul>
	);
}
