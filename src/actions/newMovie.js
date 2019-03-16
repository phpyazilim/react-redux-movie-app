import { API_BASE } from '../config/env';
import axios from 'axios';

export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";

export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";
 


export function onNewMovieSubmit({ title, cover }){
	return dispatch => {
		dispatch({
			type: "NEW_MOVIE",
			payload: axios.post(`${API_BASE}/movies`, {
				title,
				cover
			})
		})
	}
}

export function onUpdateMovieSubmit({ _id, title, cover }){
	return dispatch => {
		dispatch({
			type: "NEW_MOVIE",
			payload: axios.put(`${API_BASE}/movies/${_id}`, {
				title,
				cover
			})
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

export function fetchMovie(id){
	return dispatch => {
		dispatch({
			type: "FETCH_MOVIE",
			payload: axios.get(`${API_BASE}/movies/${id}`)
				.then(result => result.data)
		})
	}
}

