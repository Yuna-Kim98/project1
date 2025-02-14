import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AdminMain() {
    const [customerData, setCustomerData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        axios.post("http://localhost:9000/admin/customers")
            .then(res => setCustomerData(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.post("http://localhost:9000/admin/products")
            .then(res => setProductData(res.data))
            .catch(err => console.log(err));
    }, []);

    const clickTab = (name) => {
        setCategory(name);
    }

    return (
        <div>
            <h1>관리자 페이지 메인</h1>
            <ul>
                <li onClick={() => clickTab("customers")}>고객정보</li>
                <li onClick={() => clickTab("products")}>상품리스트</li>
            </ul>
            { 
                category === "customers" &&
                <table>
                    <tr>
                        <th>회원번호</th>
                        <th>이름</th>
                        <th>아이디(닉네임)</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                        <th>주소</th>
                        <th>생일</th>
                        <th>멤버십 등급</th>
                    </tr>
                    { customerData && customerData.map((list) => 
                        <tr>
                            <td>{list.customer_id}</td>
                            <td>{list.name}</td>
                            <td>{list.username}</td>
                            <td>{list.email}</td>
                            <td>{list.phone}</td>
                            <td>{list.address}</td>
                            <td>{list.birth_date}</td>
                            <td>{list.membership_level}</td>
                        </tr>
                    ) }
                </table>
            }
            {
                category === "products" &&
                <table>
                    <tr>
                        <th>pid</th>
                        <th>category</th>
                        <th>sub_category</th>
                        <th>name</th>
                        <th>color</th>
                        <th>size</th>
                        <th>likes</th>
                        <th>star</th>
                        <th>stock</th>
                        <th>original_price</th>
                        <th>discount_rate</th>
                        <th>discounted_price</th>
                    </tr>
                    { productData && productData.map((list) =>
                        <tr>
                            <td>{list.pid}</td>
                            <td>{list.category}</td>
                            <td>{list.sub_category}</td>
                            <td>{list.name}</td>
                            <td>{list.color}</td>
                            <td>{list.size}</td>
                            <td>{list.likes}</td>
                            <td>{list.star}</td>
                            <td>{list.stock}</td>
                            <td>{list.original_price}</td>
                            <td>{list.discount_rate}</td>
                            <td>{list.discounted_price}</td>
                        </tr>
                    ) }
                </table>
            }
        </div>
    );
}