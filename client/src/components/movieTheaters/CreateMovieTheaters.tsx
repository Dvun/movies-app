import React from 'react';
import MovieTheatersForm from './MovieTheatersForm';


const CreateMovieTheaters = () => {
  return (
    <>
      <h3>Create Movie Theater</h3>
      <MovieTheatersForm 
        model={{name: '', latitude: 0, longitude: 0}} 
        onSubmit={(values) => {
          console.log(values)
        }} 
      />
    </>
  );
};

export default CreateMovieTheaters;