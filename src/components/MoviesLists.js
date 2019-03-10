import React from 'react';
import PropTypes from 'prop-types';

const MoviesLists = ({movies}) => {

    const emptyMessage = (
		<p>There are no movies yet.</p>
    );
    
    const moviesList = (
		<div>
		{
      movies.error.response ? <h3> {movies.error.response.status}   {movies.error.response.statusText}  </h3> : 'hata yok'
      
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