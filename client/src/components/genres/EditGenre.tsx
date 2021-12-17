import React from 'react';
import {useParams} from 'react-router-dom';
import {capitalizeFirstLetter} from '../../Validation/Validation';
import GenreForm from './GenreForm';


const EditGenre = () => {
  const {id} = useParams()

  return (
    <>
      <h3>Edit Genre</h3>
      <GenreForm
        model={{name: 'Thomas'}}
        onSubmit={values => {
          const genre = {
            id: id,
            name: capitalizeFirstLetter(values.name),
          }
          console.log(genre)
        }}
      />
    </>
  );
};

export default EditGenre;