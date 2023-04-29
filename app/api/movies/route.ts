export interface Movie {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
}

export async function searchMoviesByTitle(
	title: string
): Promise<Movie[] | undefined> {
	const apiKey = process.env.API_KEY;
	const url = `https://movie-database-alternative.p.rapidapi.com/?s=${title}&r=json&page=1`;
	const options = {
		method: "GET",
		headers: {
			"content-type": "application/octet-stream",
			"X-RapidAPI-Key": apiKey,
			"X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const movies = result.Search;

		if (!movies) throw new Error(`No movies found with title "${title}"`);

		return movies;
	} catch (error) {
		console.error(error);
	}
}
