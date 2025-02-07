import express from 'express';
import cors from 'cors';
import adminRouter from './router/adminRouter.js' 

const server = express();
const port = 9001;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use('/admin', adminRouter);

server.listen(port, () => {
    console.log(`server port --> ${port}`);
});

/***************
 * path 경로 수정
 * adminRepository 쿼리 수정
 * adminController 컬럼명 수정
 * ** port 번호 확인
***************/