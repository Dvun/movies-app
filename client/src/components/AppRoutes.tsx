import React, {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const CreateGenre = lazy(() => import('./genres/CreateGenre'))
const ProtectedRoutes = lazy(() => import('../utils/ProtectedRoutes'))
const GenresPage = lazy(() => import('../pages/GenresPage'))
const EditGenre = lazy(() => import('./genres/EditGenre'))
const ActorsPage = lazy(() => import('../pages/ActorsPage'))
const CreateActors = lazy(() => import('./actor/CreateActors'))
const EditActors = lazy(() => import('./actor/EditActors'))
const MovieTheatersPage = lazy(() => import('../pages/MovieTheatersPage'))
const CreateMovieTheaters = lazy(() => import('./movieTheaters/CreateMovieTheaters'))
const EditMovieTheaters = lazy(() => import('./movieTheaters/EditMovieTheaters'))
const CreateMovie = lazy(() => import('./movies/CreateMovie'))
const EditMovie = lazy(() => import('./movies/EditMovie'))
const FilterMovies = lazy(() => import('./movies/FilterMovies'))
const HomePage = lazy(() => import('../pages/HomePage'))


const AppRoutes = () => {
  
  return useRoutes([
    {path: '/', element: <Suspense fallback={'Loading...'}>{<HomePage/>}</Suspense>},
    {element: <Suspense fallback={'Loading...'}>{<ProtectedRoutes/>}</Suspense>,
      children: [
        {path: 'genres', element: <Suspense fallback={'Loading...'}>{<GenresPage/>}</Suspense>},
        {path: 'genres/create', element: <Suspense fallback={'Loading...'}>{<CreateGenre/>}</Suspense>},
        {path: 'genres/edit/:id', element: <Suspense fallback={'Loading...'}>{<EditGenre/>}</Suspense>},
        
        {path: 'actors', element: <Suspense fallback={'Loading...'}>{<ActorsPage/>}</Suspense>},
        {path: 'actors/create', element: <Suspense fallback={'Loading...'}>{<CreateActors/>}</Suspense>},
        {path: 'actors/edit/:id', element: <Suspense fallback={'Loading...'}>{<EditActors/>}</Suspense>},
        
        {path: 'movieTheaters', element: <Suspense fallback={'Loading...'}>{<MovieTheatersPage/>}</Suspense>},
        {path: 'movieTheaters/create', element: <Suspense fallback={'Loading...'}>{<CreateMovieTheaters/>}</Suspense>},
        {path: 'movieTheaters/edit/:id', element: <Suspense fallback={'Loading...'}>{<EditMovieTheaters/>}</Suspense>},
        
        {path: 'movies/create', element: <Suspense fallback={'Loading...'}>{<CreateMovie/>}</Suspense>},
        {path: 'movies/edit/:id', element: <Suspense fallback={'Loading...'}>{<EditMovie/>}</Suspense>},
        {path: 'movies/filter', element: <Suspense fallback={'Loading...'}>{<FilterMovies/>}</Suspense>},
      ]
    },
    {path: '*', element: <Navigate to='/'/>}
  ])
};

export default AppRoutes;