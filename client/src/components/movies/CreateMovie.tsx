import React from 'react';
import MovieForm from './MovieForm';
import {IGenre, IMovieTheater} from '../../interfaces/interfaces';

const nonSelectedGenres: IGenre[] = [
  {id: 2, name: 'Mystic'},
  {id: 3, name: 'Drama'}, 
  {id: 1, name: 'Comedy'}, 
  {id: 4, name: 'History'},
  {id: 5, name: 'Ghost'},
]
const selectedGenres: IGenre[] = []

const selectedTheaters: IMovieTheater[] = []
const nonSelectedTheaters: IMovieTheater[] = [
  {id: 1, name: 'Helsinki', latitude: 0, longitude: 0},
  {id: 2, name: 'Kerava', latitude: 0, longitude: 0},
  {id: 3, name: 'Masala', latitude: 0, longitude: 0},
  {id: 4, name: 'Ukraine', latitude: 0, longitude: 0},
  {id: 5, name: 'Moscow', latitude: 0, longitude: 0},
]

const CreateMovie = () => {

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{title: '', inTheaters: false, trailer: '',}}
        selectedActors={[]}
        nonSelectedGenres={nonSelectedGenres}
        nonSelectedTheaters={nonSelectedTheaters}
        selectedGenres={selectedGenres}
        selectedTheaters={selectedTheaters}
        onSubmit={values => {
          console.log(values)
        }} 
      />
    </>
  )
};

export default CreateMovie;