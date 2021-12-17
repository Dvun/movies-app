import React from 'react';
import {IActorMovieDTO, IGenre, IMovieTheater} from '../../interfaces/interfaces';
import MovieForm from './MovieForm';


const nonSelected: IGenre[] = [
  {id: 2, name: 'Mystic'},
  {id: 3, name: 'Drama'},
]
const selected: IGenre[] = [
  {id: 1, name: 'Comedy'},
  {id: 4, name: 'History'},
  {id: 5, name: 'Ghost'},
]

const selectedTheaters: IMovieTheater[] = [
  {id: 1, name: 'Helsinki', latitude: 0, longitude: 0},
  {id: 2, name: 'Kerava', latitude: 0, longitude: 0},
]
const nonSelectedTheaters: IMovieTheater[] = [
  {id: 3, name: 'Masala', latitude: 0, longitude: 0},
  {id: 4, name: 'Ukraine', latitude: 0, longitude: 0},
  {id: 5, name: 'Moscow', latitude: 0, longitude: 0},
]

const selectedActors: IActorMovieDTO[] = [
  {id: 1, name: 'Spike', character: 'Spike', picture: ''},
  {id: 2, name: 'Snuke', character: 'Snuke', picture: ''},
  {id: 3, name: 'Tim', character: 'Tim', picture: ''},
]

const EditMovie = () => {

  return (
    <>
     <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: 'Toy Story',
          inTheaters: true,
          trailer: '',
        }}
        selectedActors={selectedActors}
        nonSelectedGenres={nonSelected}
        nonSelectedTheaters={nonSelectedTheaters}
        selectedGenres={selected}
        selectedTheaters={selectedTheaters}
        onSubmit={values => {
          console.log(values)
        }}
      />
    </>
  );
};

export default EditMovie;