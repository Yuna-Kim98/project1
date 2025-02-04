import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return(
    <div className='adminLogin-footer'>
      <Link to='/' className='adminLogin-footer-text'>개인정보처리방침</Link>
      <p className='adminLogin-footer-text'>SSF ALL RIGHTS RESERVED</p>
    </div>
  );
}