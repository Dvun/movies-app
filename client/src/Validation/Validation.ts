import * as yup from 'yup'


export const genreValidation = yup.object().shape({
  id: yup.number().optional(),
  name: yup.string().required('This field is required!').max(20, 'Max length is 20 chars!').trim()
})

export const actorValidation = yup.object().shape({
  name: yup.string().required('This field is required!').trim(),
  dateOfBirth: yup.date().required('This field is required!'),
})

export const movieTheatersValidation = yup.object().shape({
  name: yup.string().required('This field is required!').trim(),
  latitude: yup.number().required('Coordinates can not be null!'),
  longitude: yup.number().required('Coordinates can not be null!')
})

export const movieValidation = yup.object().shape({
  title: yup.string().required('This field is required!').trim(),
  genres: yup.array().of(genreValidation).optional()
})

export const capitalizeFirstLetter = (str: string) => {
  return (str.charAt(0).toUpperCase() + str.slice(1))
}