import * as repository from './repository/adminRepository.js';

/** 관리자 페이지 로그인 - checkAdminLogin **/
export const checkAdminLogin = async(req, res) => {
    const result = await repository.checkAdminLogin(req.body);

    if(result.result_rows === 1) {
        const token = jwt.sign({"userId": req.body.id}, 'RFO55oDtOD');
        result = {...result, "token": token};
    }

    res.json(result);
    res.end();
}