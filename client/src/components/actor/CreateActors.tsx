import React from 'react';
import {capitalizeFirstLetter} from '../../Validation/Validation';
import ActorForm from './ActorForm';


const CreateActors = () => {

  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm 
        model={{name: '', dateOfBirth: new Date(), biography: '', pictureUrl: ''}} 
        onSubmit={ async (values) => {
          const actor = {
            name: capitalizeFirstLetter(values.name),
            dateOfBirth: values.dateOfBirth,
            biography: values.biography,
            picture: values.picture
          }
          await console.log(actor)
        }}
      />
    </>
  );
};

export default CreateActors;