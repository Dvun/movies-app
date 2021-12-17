import React from 'react';
import GenreForm from './GenreForm';
import {capitalizeFirstLetter} from '../../Validation/Validation';
import {useDispatch} from 'react-redux'
import {addNewGenre} from '../../store/reducers/genres/genresActions'


const CreateGenre = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm
        model={{name: ''}}
        onSubmit={values => {
          const genre = {
            name: capitalizeFirstLetter(values.name),
          }
          dispatch(addNewGenre(genre))
        }}
      />
    </>
  );
};

export default CreateGenre;