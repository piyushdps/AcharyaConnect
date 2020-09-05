import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <div style={{ display : 'flex', justifyContent:'center', alignItems:'center' , height:'70vh'}}>
      <div>
      <h1 className='x-large text-primary' style={{textAlign:'center'}}>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='large'  style={{textAlign:'center'}}>Ah, Crap the page you are looking for is under home isolation</p>
      </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
