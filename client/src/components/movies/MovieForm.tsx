import React, {FC, useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {
  IActorMovieDTO,
  IGenre,
  IMovieCreation,
  IMovieCreationToBackend,
  IMovieTheater,
  IMultipleSelectorModel,
} from '../../interfaces/interfaces'
import {yupResolver} from '@hookform/resolvers/yup'
import {movieValidation} from '../../Validation/Validation'
import Button from '../../UI/Button'
import {Link, useLocation} from 'react-router-dom'
import {CreateInputField} from '../../UI/formFields/InputField'
import DateField from '../../UI/formFields/DateField'
import ImageField from '../../UI/formFields/ImageField'
import {CheckBoxField} from '../../UI/formFields/CheckBoxField'
import MultipleSelector from '../../UI/formFields/MultipleSelector'
import ErrorComponent from '../errorComponent/ErrorComponent';
import TypeAheadActors from '../../UI/formFields/TypeAheadActors';


interface MovieFormProps {
  model: IMovieCreation
  nonSelectedGenres: IGenre[]
  selectedGenres: IGenre[]
  nonSelectedTheaters: IMovieTheater[]
  selectedTheaters: IMovieTheater[]
  selectedActors: IActorMovieDTO[]
  onSubmit: (values: IMovieCreation) => void
}

const MovieForm: FC<MovieFormProps> = (props: MovieFormProps) => {
  const [errors, setErrors] = useState({name: '', value: ''})

  const [selectedGenres, setSelectedGenres] = useState<IMultipleSelectorModel[]>(mapToModel(props.selectedGenres))
  const [nonSelectedGenres, setNonSelectedGenres] = useState<IMultipleSelectorModel[]>(mapToModel(props.nonSelectedGenres))
  const [selectedTheaters, setSelectedTheaters] = useState<IMultipleSelectorModel[]>(mapToModel(props.selectedTheaters))
  const [nonSelectedTheaters, setNonSelectedTheaters] = useState<IMultipleSelectorModel[]>(mapToModel(props.nonSelectedTheaters))
  const [selectedActors, setSelectedActors] = useState(props.selectedActors)

  const location = useLocation()
  const methods = useForm<IMovieCreation>({
    defaultValues: {...props.model},
    resolver: yupResolver(movieValidation),
    mode: 'onChange',
  })

  const onSubmitHandler = (data: IMovieCreationToBackend) => {

    if (selectedGenres.length === 0)
      return setErrors({name: 'genres', value: 'Genres can not be null. Select minimum one genre!'})

    if (methods.watch('inTheaters') && selectedTheaters.length === 0)
      return setErrors({
        name: 'theaters',
        value: 'In Theaters is true, need select theaters, or inTheaters checkbox to false!',
      })
    const newMovie: IMovieCreationToBackend = {
      ...data,
      genres: selectedGenres,
      theaters: methods.watch('inTheaters') ? selectedTheaters : [],
      actors: selectedActors
    }
    props.onSubmit(newMovie)

    setTimeout(() => {
      if (methods.formState.isSubmitted && location.pathname === '/movies/create') {
        methods.reset()
        setSelectedTheaters(mapToModel(props.selectedTheaters))
        setSelectedGenres(mapToModel(props.selectedGenres))
        setNonSelectedTheaters(mapToModel(props.nonSelectedTheaters))
        setNonSelectedGenres(mapToModel(props.nonSelectedGenres))
      }
    }, 3000)
  }

  useEffect(() => {
    if (location.pathname === '/movies/create') {
      if (selectedGenres.length > 0 && errors) setErrors({name: '', value: ''})
      if (selectedTheaters.length > 0 && errors) setErrors({name: '', value: ''})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenres.length, selectedTheaters.length, location.pathname])
  
  function mapToModel(items: { id: number, name: string }[]): IMultipleSelectorModel[] {
    return items.map(item => {
      return {key: item.id, value: item.name}
    })
  }


  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler)}>

          <CreateInputField name="title" label="Title" className="form-control"/>
          <div className='mt-3 mb-3'>
            <CheckBoxField name="inTheaters" label="In Theaters"/>
          </div>
          <CreateInputField name="trailer" label="Trailer" className="form-control"/>
          
          <div className="d-flex justify-content-between">
            <DateField name="releaseDate" label="Release Date"/>
            <div className='d-flex flex-column w-75'>
              <TypeAheadActors 
                name='actors' 
                label='Actors' 
                actors={selectedActors} 
                onRemove={actor => {
                  const actors = selectedActors.filter(x => x !== actor)
                  setSelectedActors(actors)
                }}
                onAdd={actors => {
                  setSelectedActors(actors)
                }}
                listUI={(actor: IActorMovieDTO) => (
                  <>
                    {actor.name} / <input 
                    type="text" 
                    placeholder='Character' 
                    value={actor.character} 
                    onChange={e => {
                      const index = selectedActors.findIndex(x => x.id === actor.id)
                      const actors = [...selectedActors]
                      actors[index].character = e.currentTarget.value
                      setSelectedActors(actors)
                    }}
                  />
                  </>
                )}
              />
            </div>
          </div>
          
          <ImageField label="Poster" name="posterUrl" register={methods.register}/>

          <div className="d-flex justify-content-evenly">
            <div className="mt-5">
              <MultipleSelector
                name="genres"
                label="Genres"
                selected={selectedGenres}
                nonSelected={nonSelectedGenres}
                onChange={(selected, nonSelected) => {
                  setSelectedGenres(selected)
                  setNonSelectedGenres(nonSelected)
                }}
              />
              {errors && errors.name === 'genres' && <ErrorComponent value={errors.value}/>}
            </div>

            {
              methods.watch('inTheaters') &&
              <div className="mt-5">
                <MultipleSelector
                  name="theaters"
                  label="Theaters"
                  selected={selectedTheaters}
                  nonSelected={nonSelectedTheaters}
                  onChange={(selected, nonSelected) => {
                    setSelectedTheaters(selected)
                    setNonSelectedTheaters(nonSelected)
                  }}
                />
                {errors && errors.name === 'theaters' && <ErrorComponent value={errors.value}/>}
              </div>
            }
          </div>

          <div className="mt-5">
            <Button disabled={methods.formState.isSubmitting} type="submit">Save Changes</Button>
            <Link className="btn btn-secondary" to="/">Cancel</Link>
          </div>
          
        </form>
      </FormProvider>
    </div>
  );
};

export default MovieForm;