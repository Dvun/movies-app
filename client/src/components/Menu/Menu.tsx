import React, {FC} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Menu: FC = () => {

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to="/" className='navbar-brand'>React Movies</Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to="/genres" className='nav-link'>
                Genres
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/movies/filter" className='nav-link'>
                Filter Movies
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/actors" className='nav-link'>
                Actors
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/movieTheaters" className='nav-link'>
                Movie Theaters
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/movies/create" className='nav-link'>
                Create Movie
              </NavLink>
            </li>
          </ul>  
        </div>
      </div>
    </nav>
  );
};

export default Menu;