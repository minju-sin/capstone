// ./controllers/posController.js

const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

// 포스기 메뉴판 API (카테고리별 필터링)
// GET /menu
const PosMenu = asyncHandler(async (req, res) => {
    let connection; // 데이터베이스 연결 객체
    const category = req.query.category; // 쿼리 파라미터에서 category 가져옴 (optional)

    try {
        // 데이터베이스에 연결
        connection = await dbConnect();
        
        let query = 'SELECT idmenu, pricemenu, category FROM menu';
        let queryParams = [];

        // category 필터가 있으면 해당 카테고리만 선택
        if (category) {
            query += ' WHERE category = ?';
            queryParams.push(category);
        }

        // 쿼리 실행
        const [results] = await connection.query(query, queryParams);
        
        // 결과를 JSON 형식으로 응답
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
