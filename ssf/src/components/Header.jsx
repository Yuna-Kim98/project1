import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <div className='adminLogin-header'>
      <div className='header-left'>
        <Link to='/' className='header-logo'>
          <img src="/image/ssfshop.png" alt="" />
          <span>관리자 페이지</span>
        </Link>
      </div>
      <nav className='header-right'>
        <Link to='/' className='header-right-menu'>고객정보</Link>
        <Link to='/' className='header-right-menu'>상품리스트</Link>
      </nav>
    </div>
  );
}