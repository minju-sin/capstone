// ./controllers/closeController.js

const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

// 총 매출액 보여주기 API
// GET /totalPrice
const CloseTotalPrice = asyncHandler(async (req, res) => {
    let connection;
    try {
        // 데이터베이스에 연결
        connection = await dbConnect();
        
        const [results] = await connection.query('SELECT SUM(totalPrice) as totalPrice FROM orders');
        
        // 쿼리 결과를 JSON 형식으로 응답
        // results[0].totalPrice가 총 매출액입니다.
        res.json({ totalPrice: results[0].totalPrice || 0 });
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

module.exports = { CloseTotalPrice };
