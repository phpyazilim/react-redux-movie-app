import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_MOVIES_FULLFILLED = "FETCHED_MOVIES_FULLFILLED";
export const FETCH_MOVIES_REJECTED = "FETCHED_MOVIES_REJECTED";

export function fetchMovies(){
	return dispatch => {
		 
		 dispatch({
			 type:"FETCH_MOVIES",
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
 
 