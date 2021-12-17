import React, {FC} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {IMovieTheaterCreation} from '../../interfaces/interfaces';
import {yupResolver} from '@hookform/resolvers/yup';
import {capitalizeFirstLetter, movieTheatersValidation} from '../../Validation/Validation';
import {CreateInputField} from '../../UI/formFields/InputField';
import Map from '../../utils/Map';
import Button from '../../UI/Button';
import {Link} from 'react-router-dom';


interface MovieTheatersProps {
  model: IMovieTheaterCreation
  onSubmit: (values: IMovieTheaterCreation) => void
}

const MovieTheatersForm: FC<MovieTheatersProps> = ({model}) => {
  const methods = useForm<IMovieTheaterCreation>({
    defaultValues: {name: model.name, latitude: model.latitude, longitude: model.longitude},
    resolver: yupResolver(movieTheatersValidation),
    mode: 'onBlur',
  })

  const onSubmitHandler: SubmitHandler<IMovieTheaterCreation> = (data: IMovieTheaterCreation) => {
    if (data.latitude === 0 && data.longitude === 0) {
      return methods.setError('latitude', {type: 'manual', message: 'Coordinates can not be null!'})
    } 
    const movieTheater = {
      name: capitalizeFirstLetter(data.name),
      latitude: data.latitude,
      longitude: data.longitude,
    }
    console.log(movieTheater)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <CreateInputField label="Name" name="name" className="form-control"/>
        <div className="mb-3">
          <Map height="500px" name='coordinates' latitude={methods.getValues('latitude')} longitude={methods.getValues('longitude')}/>
        </div>
        <Button type="submit" disabled={methods.formState.isSubmitting}>Save Changes</Button>
        <Link to="/movieTheaters" className="btn btn-secondary">Cancel</Link>
      </form>
    </FormProvider>
  );
};

export default MovieTheatersForm;