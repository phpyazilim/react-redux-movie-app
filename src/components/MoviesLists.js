import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid} from 'semantic-ui-react'
import { PropagateLoader} from 'react-spinners';


const MoviesLists = ({movies}) => {
  
    const emptyMessage = (
		<p>There are no movies yet.</p>
    );
   
    const moviesList = (
    
		<div>

         <PropagateLoader
            size={40}
            color={'skyblue'}
            loading={movies.fetching}
          />


		{
       
      movies.error.response ? 
      <h3> {movies.error.response.status}   {movies.error.response.statusText}  </h3> 
      : 
      <Grid stackable columns={3}>
      {
      movies.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)  
      }
      </Grid>
      }
		</div>
    );
    
    return (
        <div>
          	{ movies.length === 0 ? emptyMessage : moviesList }
        </div>
    );
};

MoviesLists.propTypes = {
    movies: PropTypes.shape({
       movies:PropTypes.array.isRequired
    }).isRequired
};

export default MoviesLists;