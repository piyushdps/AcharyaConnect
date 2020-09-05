import React, {useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import alanBtn from "@alan-ai/alan-sdk-web";
import { useHistory} from 'react-router-dom'


const Navbar =  ({ auth: { isAuthenticated, loading }, logout,profile: { profile }

  }) =>{


    const history = useHistory();

    const user = profile? `/profile/${profile.user._id}`: null

    useEffect(() => {
      alanBtn({
          key: '87cc667f3de7bbcfb28d2061d468a8b92e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: ({command , pName}) => {
              if (command === 'openPage') {
                    if(pName === 'login')
                    {

                      history.push("/login")
                      // isAuthenticated ? history.push("/login"): alert('Not Logged in');
                      // Call the client code that will react to the received command
                  }
                  else if( pName === 'sign up' || pName === 'registration' || pName==='register')
                  {
                    history.push("/register")
                  }
                  else if( pName === 'dashboard')
                  {
                   history.push("/dashboard");
                  }else if( pName === 'profiles' || pName === 'discover')
                  {
                   history.push("/profiles")
                  }
                  else if( pName === 'wall')
                  {
                 history.push(user)
                  }
              }
      }});// eslint-disable-next-line 
  }, []);
      


  

  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'> People</Link>
      </li>
      <li>
        <Link to={profile? user : '/profiles'}> Wall</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Discover</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  
  
 
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> AcharyaConnect
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
