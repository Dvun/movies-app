import React, {FC} from 'react';
import styles from './moviesList.module.scss'
import {IMovieDto} from '../../interfaces/interfaces';
import MovieItem from './MovieItem';
import GenericList from '../../utils/GenericList';

interface moviesListProps {
  moviesDto?: IMovieDto[]
}

const MoviesList: FC<moviesListProps> = ({moviesDto}) => {

  return (
    <GenericList list={moviesDto}>
      <div className={styles.div}>
        {
          moviesDto?.map(item => (
            <MovieItem key={item.id} movieDto={item}/>
          ))
        }
      </div>
    </GenericList>
  )
};

export default MoviesList;