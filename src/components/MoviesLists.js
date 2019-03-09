import React from 'react';
import PropTypes from 'prop-types';

const MoviesLists = ({movies}) => {

    const emptyMessage = (
		<p>There are no movies yet.</p>
    );
    
    const moviesList = (
		<div>
			Movies list
		</div>
    );
    
    return (
        <div>
          	{ movies.length === 0 ? emptyMessage : moviesList }
        </div>
    );
};

MoviesLists.propTypes = {
    movies: PropTypes.object.isRequired
};

export default MoviesLists;