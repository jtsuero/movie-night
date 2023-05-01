import axios, { AxiosRequestConfig } from "axios";

export interface Movie {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
}

const apiKey = process.env.API_KEY;
export async function searchMoviesByTitle(
	title: string
): Promise<Movie[] | undefined> {
	const options: AxiosRequestConfig = {
		method: "GET",
		url: "https://movie-database-alternative.p.rapidapi.com/",
		params: {
			s: `${title}`,
			r: "json",
			page: "1",
		},
		headers: {
			"content-type": "application/octet-stream",
			"X-RapidAPI-Key": apiKey,
			"X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data.Search;
	} catch (error) {
		console.error(error);
	}
}
