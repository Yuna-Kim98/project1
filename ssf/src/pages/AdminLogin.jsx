import React from 'react';

export default function Layout() {
  return(
    <div className='adminLogin-content'>
      <div className='adminLogin-content-box'>
        <p>SSF PARTNER</p>
        <p>본 페이지는 SSF Mall 관리자 페이지로 <br />입점 신청 및 진행현황은 [입점문의] 메뉴를 이용해주세요.</p>
        <form className='adminLogin-form'>
          <ul className='adminLogin-form-ul'>
            <li>
              <input type='text' name='id' placeholder='아이디' />
            </li>
            <li>
              <input type='password' name='pwd' placeholder='비밀번호' />
            </li>
            <li>
              <button type='button'>로그인</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}