import React, {FC, useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {genreValidation} from '../../Validation/Validation';
import {CreateInputField} from '../../UI/formFields/InputField';
import Button from '../../UI/Button';
import {Link, useLocation} from 'react-router-dom';
import {ICreateGenre} from '../../interfaces/interfaces';

interface GenreFormProps {
  model: ICreateGenre
  onSubmit: (values: ICreateGenre) => void
}

const GenreForm: FC<GenreFormProps> = ({model, onSubmit}) => {
  const location = useLocation()
  const methods = useForm({
    defaultValues: {name: model.name},
    resolver: yupResolver(genreValidation),
  })

  useEffect(() => {
    if (location.pathname === '/genres/create') {
      methods.formState.isSubmitSuccessful && methods.reset()
    }
  }, [location.pathname, methods, methods.formState.isSubmitSuccessful])

  const onSubmitHandler = (data: ICreateGenre) => {
    onSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <CreateInputField label="Name" name="name" className="form-control"/>
        <Button disabled={methods.formState.isSubmitting} type="submit">Save Changes</Button>
        <Link className="btn btn-secondary" to="/genres">Cancel</Link>
      </form>
    </FormProvider>
  );
};

export default GenreForm;