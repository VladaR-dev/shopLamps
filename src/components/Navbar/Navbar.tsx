import {  useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context';
import s from './Navbar.module.css';

export const Navbar = () => {
  const { totalItems, isAuth, setIsAuth } = useAppContext();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActive(path);
  };

  const handleLogOut = () => {
    setIsAuth(false);
  };

  return (
    <div className={s.navbarContainer}>
      <nav className={s.navbar}>
        <Link
          to="/"
          className={`${s.navbarItem} ${s.navbarStarterStore} ${
            active === '/' ? s.activeLink : ''
          }`}
          onClick={() => handleLinkClick('/')}>
          Starter Store
        </Link>

        <div className={s.navbarLeftSide}>
          {isAuth ? (
            <button onClick={handleLogOut}>Log Out</button>
          ) : (
            <>
              <Link
                to="/signUp"
                className={`${s.navbarItem} ${
                  active === '/signUp' ? s.activeLink : ''
                }`}
                onClick={() => handleLinkClick('/signUp')}>
                Sign Up
              </Link>

              <Link
                to="/signIn"
                className={`${s.navbarItem} ${
                  active === '/signIn' ? s.activeLink : ''
                }`}
                onClick={() => handleLinkClick('/signIn')}>
                Sign In
              </Link>
            </>
          )}

          <Link
            to="./cart"
            className={`${s.navbarItem} ${
              active === '/cart' ? s.activeLink : ''
            }`}
            onClick={() => handleLinkClick('/cart')}>
            {`Cart ${totalItems === 0 ? '' : totalItems}`}
          </Link>
        </div>
      </nav>
    </div>
  );
};
