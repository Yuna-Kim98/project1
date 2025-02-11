import express from 'express';
import cors from 'cors';
import adminRouter from './router/adminRouter.js' 

const server = express();
const port = 9000;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use('/admin', adminRouter);
// 상품 데이터 가져오기 API
server.get('/products', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM products"); // 상품 데이터 조회
        console.log("상품 데이터 조회 완료:", rows[0].color[2]); // 터미널 로그 출력 - 첫 번째 상품의 2번지 색 출력 : Red
        res.json(rows); // JSON 응답으로 클라이언트에 데이터 전송
    } catch (error) {
        console.error("상품 데이터 조회 실패:", error); // 오류 로그 출력
        res.status(500).json({ error: "서버 오류" });
    }
});


server.listen(port, () => {
    console.log(`server port --> ${port}`);
});

/***************
 * path 경로 수정
 * adminRepository 쿼리 수정
 * adminController 컬럼명 수정
 * ** port 번호 확인
***************/