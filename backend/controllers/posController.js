// ./controllers/posController.js

const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

// 포스기 메뉴판 API
// GET /menu
const PosMenu = asyncHandler(async (req, res) => {
    let connection; // 데이터베이스 연결 객체를 담을 변수

    try {
        // 데이터베이스에 연결
        connection = await dbConnect();
        
        // 'menu' 테이블에서 'idmenu'와 'pricemenu' 컬럼을 선택하는 쿼리를 실행
        const [results] = await connection.query('SELECT idmenu, pricemenu FROM menu');
        
        // 쿼리 결과를 JSON 형식으로 응답
        res.json(results);
    } catch (err) {
        console.error('오류 발생', err);
        res.status(500).send('서버 에러');
    } finally {
        // 데이터베이스 연결을 종료
        if (connection) {
            await connection.end();
        }
    }
});

module.exports = { PosMenu };
