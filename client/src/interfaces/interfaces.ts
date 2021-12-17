export interface IMovieDto {
  id: number
  title: string
  poster: string
}

export interface ILandingPage {
  inTheater?: IMovieDto[]
  upcomingReleases?: IMovieDto[]
}

export interface IGenre {
  id: number
  name: string
}

export interface ICreateGenre {
  name: string
}

export interface IActor {
  name: string
  dateOfBirth: Date
  biography?: string
  picture?: File
  pictureUrl: string
}

export interface IActorMovieDTO {
  id: number
  name: string
  character: string
  picture: string
}

export interface IMovieTheaterCreation {
  name: string
  latitude: number
  longitude: number
}

export interface IMovieTheater extends IMovieTheaterCreation{
  id: number
}

export interface ICoordinate {
  lng: number
  lat: number
}

export interface IMapField {
  coordinates: ICoordinate[] | []
  latField: string
  lngField: string
}

export interface IMovieCreation {
  title: string
  inTheaters: boolean
  trailer: string
  releaseDate?: Date
  poster?: File
  posterUrl?: string
}

export interface IMovieCreationToBackend extends IMovieCreation{
  genres: IMultipleSelectorModel[]
  theaters: IMultipleSelectorModel[]
  actors?: IActorMovieDTO[]
}

export interface IMultipleSelectorModel {
  key: number
  value: string
}