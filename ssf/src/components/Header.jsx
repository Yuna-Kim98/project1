import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <div className='adminLogin-header'>
      <div className='header-left'>
        <Link to='/' className='header-logo'>
          <span>SSF PARTNER</span>
        </Link>
      </div>
      <nav className='header-right'>
        <Link to='/' className='header-right-menu'>입점문의</Link>
        <Link to='/' className='header-right-menu'>광고문의</Link>
      </nav>
    </div>
  );
}