import React from 'react';

export default function AdminRegiProduct() {
    return (
        <div className='adminRegiProduct-container'>
            <h3>상품 등록 폼</h3>
            <form>
                <ul>
                    <li>
                        <label>대분류</label>
                        <select name="" id="">
                            <option value="top">상의</option>
                            <option value="bottom">하의</option>
                            <option value="outer">아우터</option>
                            <option value="shoes">신발</option>
                        </select>
                    </li>
                    <li>
                        <label>소분류</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label>상품명</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label>색상</label>
                        <input type="text"
                                placeholder='영문으로 입력해주세요.'
                        />
                    </li>
                    <li>
                        <label>가격</label>
                        <input type="text"
                                placeholder='구분점 없이 입력해주세요.'
                        />
                    </li>
                </ul>
                <button type='button'>등록하기</button>
            </form>
        </div>
    );
}