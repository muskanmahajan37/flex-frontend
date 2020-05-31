import React, { useState, useEffect, useRef } from 'react';

// Components
import { Navbar, Nav } from 'react-bootstrap';

// React-router
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../store/auth/thunks';

const AuthHeader = ({ user, logout }) => {
  const wrapperRef = useRef(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  return (
    <Navbar style={{ padding: 0, paddingTop: '1%' }} className='navbar'>
      <Link to='/' className='logo'>
        FLEX
      </Link>
      <Nav style={{ padding: 0 }} className='ml-auto'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/' className='link'>
          Switch to selling
        </Link>
        <div>
          <img
            src={`http://localhost:8000/user/${user.image}`}
            className='profile-image'
            onClick={() => setMenu(!menu)}
            onBlur={() => setMenu(false)}
            ref={wrapperRef}
            alt={'Profile'}
          />
          {menu && (
            <div className='header-submenu'>
              <Link to={`/${user.username}`} className='header-submenu-item'>
                Profile
              </Link>
              <Link to='/' className='header-submenu-item'>
                Settings
              </Link>
              <Link to='/' className='header-submenu-item'>
                Help & Support
              </Link>
              <div className='divider' />
              <Link
                to='/'
                className='header-submenu-item'
                onClick={() => logout()}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);
