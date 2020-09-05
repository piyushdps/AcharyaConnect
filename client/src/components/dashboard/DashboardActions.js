import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = (props) => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
      <i class="fa fa-plus text-primary" aria-hidden="true" />  Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
      <i class="fa fa-plus text-primary" aria-hidden="true"  /> Add Education
      </Link>
      <Link to={`/profile/${props.id}`} className='btn btn-light'>
        View Wall
      </Link>
          </div>
  );
};

export default DashboardActions;
