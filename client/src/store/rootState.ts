import {combineReducers} from '@reduxjs/toolkit';
import genresSlice from './reducers/genres/genresSlice';

const rootState = combineReducers({
  genresSlice: genresSlice
})

export default rootState