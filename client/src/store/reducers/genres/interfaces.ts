import {IGenre} from '../../../interfaces/interfaces';

export interface IInitialState {
  genres: IGenre[]
  isLoading: boolean
  error: string | null
}