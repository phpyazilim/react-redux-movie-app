import { API_BASE } from '../config/env';
import axios from 'axios';

export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";
export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";

export function onNewMovieSubmit({title,cover}){
    console.log(title,cover);
	return dispatch => {
		 
		dispatch({
			type: "NEW_MOVIE",
			payload: axios.post(`${API_BASE}/movies`,{
                title,
                cover
            })
				.then(result => result.data.movies)
		})
	/*
		axios.get(`${API_BASE}/movies`)
			.then(result => result.data)
			.then(data => dispatch({
				type: FETCH_MOVIES,
				payload: data.movies
			}))
			.catch(error =>  dispatch({
				type:FETCH_MOVIES_ERROR,
				payload: error
			}))
*/

	}
}
 
 