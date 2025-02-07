import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';

export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginState = () => {
    if (isLoggedIn) { // 로그아웃 버튼을 클릭할 때
      const select = window.confirm('로그아웃 하시겠습니까?');
      if (select) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate('/');
      }
      console.log('select --> ', select);
    } else { // 
      navigate('/');
    }
  }
console.log('isLoggedIn --> ', isLoggedIn);

  return(
    <div className='adminLogin-header'>
      <div className='header-left'>
        <Link to='/' className='header-logo'>
          <img src="/image/ssfshop.png" alt="" />
          <span>관리자 페이지</span>
        </Link>
      </div>
      <nav className='header-right'>
        <Link to='/' type='button' onClick={handleLoginState}>
          { isLoggedIn ? "로그아웃" : "" }
        </Link>
        <Link to='/' className='header-right-menu'>고객정보</Link>
        <Link to='/' className='header-right-menu'>상품리스트</Link>
      </nav>
    </div>
  );
}