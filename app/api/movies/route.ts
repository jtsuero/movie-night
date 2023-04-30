const apiKey = process.env.API_KEY;
const axios = require("axios");

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
	const options = {
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

export async function searchMoviesByID(id: string): Promise<any> {
	const options = {
		method: "GET",
		url: "https://movie-database-alternative.p.rapidapi.com/",
		params: {
			r: "json",
			i: id,
		},
		headers: {
			"content-type": "application/octet-stream",
			"X-RapidAPI-Key": apiKey,
			"X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		if (!response) throw new Error("No movies found with that id");
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
