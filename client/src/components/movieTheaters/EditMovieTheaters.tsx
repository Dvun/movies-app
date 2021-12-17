import React from 'react';
import MovieTheatersForm from './MovieTheatersForm';


const EditMovieTheaters = () => {

  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheatersForm
        model={{name: 'Helsinki', latitude: 60.16912314004093, longitude: 24.93196964263916}}
        onSubmit={(values) => {
          console.log(values)
        }}
      />
    </>
  );
};

export default EditMovieTheaters;