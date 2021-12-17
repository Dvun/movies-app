import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {deleteGenre, getAllGenres} from '../store/reducers/genres/genresActions';
import GenericList from '../utils/GenericList';
import Button from '../UI/Button';
import {RootState} from '../store/store';

const GenresPage = () => {
  const dispatch = useDispatch()
  const {genres, isLoading} = useSelector(({genresSlice}: RootState) => genresSlice)
  
  useEffect(() => {
    dispatch(getAllGenres())
  }, [dispatch])

  return (
    <>
      <h3>Genres</h3>
      <Link to="/genres/create" className="btn btn-primary">Create genre</Link>
      <GenericList list={genres} isLoadingUI={isLoading}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th/>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {genres?.map(genre => (
            <tr key={genre.id}>
              <td>
                <Link to={`/genres/edit/${genre.id}`} className="btn btn-success me-2">Edit</Link>
                <Button type="button" className='btn btn-danger' onClick={() => dispatch(deleteGenre(genre.id))}>Delete</Button>
              </td>
              <td>{genre.name}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
};

export default GenresPage;