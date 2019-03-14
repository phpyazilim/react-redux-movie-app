import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";
export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";

export function fetchMovies(){
	return dispatch => {
		 
		dispatch({
			type: "FETCH_MOVIES",
			payload: axios.get(`${API_BASE}/movies`)
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
 
 