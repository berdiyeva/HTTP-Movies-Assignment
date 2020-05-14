import React, { useState } from "react";

export default function Update(props) {
	const [movieData, setMovieData] = useState({
		title: "",
		director: "",
		metascore: "",
		starts: "",
	});

	const changeHandler = (e) => {
		setMovieData({ ...movieData, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form>
				<input
					type='text'
					name='title'
					placeholder='title'
					value={movieData.title}
					onChange={changeHandler}
				></input>
				<input
					type='text'
					name='director'
					placeholder='director'
					value={movieData.director}
					onChange={changeHandler}
				></input>
				<input
					type='text'
					name='metascore'
					placeholder='metascore'
					value={movieData.metascore}
					onChange={changeHandler}
				></input>
				<input
					type='text'
					name='stars'
					placeholder='stars'
					value={movieData.stars}
					onChange={changeHandler}
				></input>
			</form>
		</div>
	);
}
