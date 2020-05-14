import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";
import Update from "./Update";

function Movie({ addToSavedList, setMovieList }) {
	const [movie, setMovie] = useState(null);
	const params = useParams();
	const history = useHistory();

	const fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err.response));
	};

	const saveMovie = () => {
		addToSavedList(movie);
	};

	useEffect(() => {
		fetchMovie(params.id);
	}, [params.id]);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	const removeMovie = () => {
		axios.delete(`http://localhost:5000/api/movies/${params.id}`).then(() => {
			setMovieList((state) => state.filter((movie) => movie.id != params.id));
			history.push("/");
		});
	};

	return (
		<div className='save-wrapper'>
			<MovieCard movie={movie} />
			<div className="buttons">
				<div className='save-button' onClick={saveMovie}>
					Save
				</div>
				<div className='delete-button' onClick={removeMovie}>
					Delete
				</div>
				<div className='update-button'>Update</div>
			</div>
		</div>
	);
}

export default Movie;
