import React from 'react';
import {capitalizeFirstLetter} from '../../Validation/Validation';
import ActorForm from './ActorForm';
import {useParams} from 'react-router-dom';


const EditActors = () => {
  const {id} = useParams()

  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: 'Thomas', 
          dateOfBirth: new Date('1996-06-01T00:00:00'), 
          biography: '<p>Thomas</p>', 
          pictureUrl: 'https://m.media-amazon.com/images/I/81v5s2GM-fL._SL1500_.jpg'
        }}
        onSubmit={(values) => {
          const actor = {
            name: capitalizeFirstLetter(values.name),
            dateOfBirth: values.dateOfBirth,
            biography: values.biography,
            picture: values.picture
          }
          console.log(actor)
        }}
      />
    </>
  );
};

export default EditActors;