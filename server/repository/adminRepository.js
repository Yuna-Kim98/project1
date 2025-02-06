import { db } from './db.js';

/** 관리자 페이지 로그인 - select **/
export const checkAdminLogin = async({id, pwd}) => { // 수정 필요 : 테이블명, 컬럼명
    const sql = `
        select count(*) as result_rows
        from shoppy_member
        where id = ? and pwd = ?
    `;

    const [result] = await db.execute(sql, [id, pwd]);

    return result[0];
}