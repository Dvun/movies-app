import React from 'react';
import {Link} from 'react-router-dom';

const MovieTheatersPage = () => {

  return (
    <>
     <h3>Movie Theaters</h3>
      <Link to='/movieTheaters/create' className='btn btn-primary'>Create Movie Theater</Link>
    </>
  );
};

export default MovieTheatersPage;