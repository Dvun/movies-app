import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addNewGenre, deleteGenre, editGenre, getAllGenres} from './genresActions';
import {IGenre} from '../../../interfaces/interfaces';
import {IInitialState} from './interfaces';
import {toast} from 'react-toastify';

const initialState: IInitialState = {
  isLoading: false,
  genres: [],
  error: null,
}


const genresSlice = createSlice({
  name: 'genres',
  initialState: initialState,
  reducers: {},
  extraReducers: {

    [addNewGenre.pending.type]: (state) => {
      state.isLoading = true
    },
    [addNewGenre.fulfilled.type]: (state) => {
      state.isLoading = false
      toast.success('New genre created!')
    },
    [addNewGenre.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    

    [getAllGenres.pending.type]: (state) => {
      state.isLoading = true
    },
    [getAllGenres.fulfilled.type]: (state, action: PayloadAction<IGenre[]>) => {
      state.genres = action.payload
      state.isLoading = false
    },
    [getAllGenres.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },

    [editGenre.pending.type]: (state) => {
      state.isLoading = true
    },
    [editGenre.fulfilled.type]: (state) => {
      state.isLoading = false
    },
    [editGenre.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },

    [deleteGenre.pending.type]: (state) => {
      state.isLoading = true
    },
    [deleteGenre.fulfilled.type]: (state) => {
      state.isLoading = false
    },
    [deleteGenre.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },

  },
})


export default genresSlice.reducer