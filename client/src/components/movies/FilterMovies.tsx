import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {IGenre} from '../../interfaces/interfaces';
import Button from '../../UI/Button';
import {CheckBoxField} from '../../UI/formFields/CheckBoxField';
import {InputField} from '../../UI/formFields/InputField';
import SelectField from '../../UI/formFields/SelectField';


const genres: IGenre[] = [
  {id: 1, name: 'Drama'},
  {id: 2, name: 'Comedy'},
]

const FilterMovies = () => {
  const methods = useForm({
    defaultValues: {
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <h3>Filter Movies</h3>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="row gx-3 align-items-center">

            <div className='col-auto d-flex'>
              <InputField name="title" className="form-control" placeholder="Title of the movie"/>
            </div>

            <div className="col-auto">
              <SelectField name="genreId" options={genres}/>
            </div>

            <div className="col-auto">
              <CheckBoxField name="upcomingReleases" label="Upcoming Releases"/>
            </div>

            <div className="col-auto">
              <CheckBoxField name="inTheaters" label="In Theaters"/>
            </div>

            <div className="col-auto">
              <Button type="submit" className="btn btn-primary me-2">Filter</Button>
              <button type="button" className="btn btn-danger" onClick={() => methods.reset()}>Reset</button>
            </div>
            
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default FilterMovies;