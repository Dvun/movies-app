import {createAsyncThunk} from '@reduxjs/toolkit'
import callApi from '../../../utils/callApi'
import {ICreateGenre} from '../../../interfaces/interfaces'


export const getAllGenres = createAsyncThunk(
  'genres/getAll',
  async (_, {rejectWithValue}) => {
    const res = await callApi.get('Genre/getAll')
    try {
      return res.data
    }catch (e) {
      rejectWithValue(res.data)
    }
  }
)

export const addNewGenre = createAsyncThunk(
  'genres/addNewGenre',
  async (genre: ICreateGenre, {rejectWithValue}) => {
    await callApi.post('Genre/add', genre)
      .then(res => res.data).catch((err: string | null) => rejectWithValue(err))
  }
)

export const editGenre = createAsyncThunk(
  'genres/editGenre',
  async () => {

  }
)

export const deleteGenre = createAsyncThunk(
  'genres/deleteGenre',
  async (id: number, {rejectWithValue}) => {
    
  }
)