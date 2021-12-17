import React from 'react';
import {Link} from 'react-router-dom';

const ActorsPage = () => {

  return (
    <>
     <h3>Actors</h3>
      <Link to='/actors/create' className='btn btn-primary'>Create Actor</Link>
    </>
  );
};

export default ActorsPage;