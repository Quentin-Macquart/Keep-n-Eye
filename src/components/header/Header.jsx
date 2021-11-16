import './Header.css';
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="menu">
        <Menu width="40%">
          <ul>
            <li className=" menu-item">Watchlist</li>
          </ul>
        </Menu>
      </div>
      <nav className="navbar ">
        <div className="logo">
          <Link
            to="/"
            className="Home"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            Keep N
          </Link>
        </div>
        <ul className="navlink">
          <li>
            <Link
              to="/FicheFilm"
              className="watchpage "
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Watchlist
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
