import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';

export default function Layout() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const initForm = { 'id': '', 'pwd': '' };
  const initErr = { 'id': '', 'pwd': '', 'err': '' };
  const refs = {
    idRef: useRef(null),
    pwdRef: useRef(null)
  };

  const [formData, setFormData] = useState(initForm);
  const [errMsg, setErrMsg] = useState(initForm);

  /** onChane : 폼 데이터 관리 **/
  const handleChangeForm = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});

    if (name === 'id') {
        value === '' ? setErrMsg({...errMsg, ['id']: '아이디를 입력해주세요'}) : setErrMsg({...errMsg, ['id']: ''});
    } else if (name === 'pwd') {
        value === '' ? setErrMsg({...errMsg, ['pwd']: '아이디를 입력해주세요'}) : setErrMsg({...errMsg, ['pwd']: ''});  
    }
  }

  /** onSubmit : 버튼 클릭 이벤트 **/
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
    if (validate()) {
      console.log('send data --> ', formData);
    }

    // 서버 전송
    axios.post('http://localhost:9001/admin/login', formData)
        .then(res => {
          console.log('res.data --> ', res.data);
          if (res.data.result_rows === 1) {
            alert('로그인 성공!');
            localStorage.setItem("token", res.data.token);
            setIsLoggedIn(true);
            navigate('/admin/main');
          } else if (refs.idRef.current.value !== '' && refs.pwdRef.current.value !== '' && res.data.result_rows === 0) {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
            // setErrMsg({...errMsg, ['err']: "아이디 또는 비밀번호가 일치하지 않습니다."});
            refs.idRef.current.focus();
          }
        })
        .catch(err => console.log(err));
  }
  
  /** validate : 유효성 체크 **/
  const validate = () => {
    if (refs.idRef.current.value === '') {
      // alert('아이디를 입력해주세요.');
      setErrMsg({...errMsg, ['id']: '아이디를 입력해주세요.'});
      refs.idRef.current.focus();
      return false;
    } else if (refs.pwdRef.current.value === '') {
      // alert('비밀번호를 입력해주세요.');
      setErrMsg({...errMsg, ['pwd']: '비밀번호를 입력해주세요.'});
      refs.pwdRef.current.focus();
      return false;
    }
    return true;
  }

  return(
    <div className='adminLogin-container'>
      <div className='adminLogin-contents-wrap'>
        <p className='adminLogin-content-title'>로그인</p>
        <div className='adminLogin-content-box'>
          <form className='adminLogin-form' onSubmit={handleLoginSubmit}>
            <div className='adminLogin-form-content1'>
              <ul className='adminLogin-form-ul'>
                <li>
                  <input type='text' 
                        name='id' 
                        ref={refs.idRef}
                        onChange={handleChangeForm} 
                        placeholder='아이디' />
                </li>
                <li>
                  <input type='password' 
                        name='pwd'
                        ref={refs.pwdRef}
                        onChange={handleChangeForm} 
                        placeholder='비밀번호' />
                </li>
              </ul>
              <div>
                  <button type='submit' className='adminLogin-btn'>로그인</button>
              </div>
            </div>
            { errMsg.id !== '' && <p className='adminLogin-form-errMsg'>{errMsg.id}</p> }
            { errMsg.pwd !== '' && <p className='adminLogin-form-errMsg'>{errMsg.pwd}</p> }
            {/* 폼 데이터 일치하지 않을 시 에러메시지 :: 아이디 또는 비밀번호가 일치하지 않습니다. */}
            <div className='adminLogin-form-content2'>
              <input type="checkbox" />아이디 저장
            </div>
            <div className='adminLogin-form-content3'>
              <a href=""><span>아이디 찾기</span></a>
              <a href=""><span>비밀번호 재설정</span></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}