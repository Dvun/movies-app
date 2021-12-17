import React, {FC, useEffect, useState} from 'react';
import MoviesList from '../components/movies/MoviesList';
import {ILandingPage, IMovieDto} from '../interfaces/interfaces';

const inTheaters: IMovieDto[] = [
  {
    id: 1,
    title: 'Spider-Man: Far From Home',
    poster: 'https://th.bing.com/th/id/R.50dd27babd6f5dc226b22b195b2653a8?rik=UNhgWFtmpWctxQ&pid=ImgRaw&r=0'
  },
  {
    id: 2,
    title: 'Luca',
    poster: 'https://th.bing.com/th/id/OIP.ByfabbjGxZZ5TE2_boL4NQHaLH?pid=ImgDet&rs=1'
  },
  {
    id: 3,
    title: 'Spider-Man: Far From Home',
    poster: 'https://th.bing.com/th/id/R.50dd27babd6f5dc226b22b195b2653a8?rik=UNhgWFtmpWctxQ&pid=ImgRaw&r=0'
  },
]

const upcomingReleases: IMovieDto[] = [
  {
    id: 4,
    title: 'Soul',
    poster: 'https://th.bing.com/th/id/OIP.z4gk_fLITkNVvVcmoEe2-AHaKf?pid=ImgDet&rs=1'
  },
  {
    id: 5,
    title: 'Mr. and Mrs. Smith',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/image_6adc39ff.jpeg?region=0,0,1400,2100'
  },
]

const HomePage: FC = () => {
  const [movies, setMovies] = useState<ILandingPage>({})
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheater: inTheaters,
        upcomingReleases: upcomingReleases
      })
    }, 1000)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <>
      <h3>In Theater</h3>
      <MoviesList moviesDto={movies.inTheater}/>
      <h3>Upcoming Releases</h3>
      <MoviesList moviesDto={movies.upcomingReleases}/>
    </>
  );
};

export default HomePage;