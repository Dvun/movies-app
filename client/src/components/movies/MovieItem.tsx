import React, {FC} from 'react';
import styles from './movieItem.module.scss'
import {IMovieDto} from '../../interfaces/interfaces';


interface MovieItemProps {
  movieDto: IMovieDto
}

const MovieItem: FC<MovieItemProps> = ({movieDto}) => {
  
  const buildLink = () => `/movie/${movieDto.id}`

  return (
    <div className={styles.div}>
      <a href={buildLink()}>
        <img src={movieDto.poster} alt="Poster"/>
      </a>
      <p>
        <a href={buildLink()}>{movieDto.title}</a>
      </p>
    </div>
  );
};

export default MovieItem;