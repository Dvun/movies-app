import React from 'react';

const Footer = () => {

  return (
    <footer className='card-footer py-5 mt-5 bg-dark text-light' style={{borderRadius: 0}}>
      <div className='container'>
        React Movies {new Date().getFullYear().toString()}
      </div>
    </footer>
  );
};

export default Footer;