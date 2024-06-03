// ./controllers/orderController.js

const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

//  주문내역 저장 API
// POST /save
const orderSave = asyncHandler(async (req, res) => {
    let connection; // 데이터베이스 연결 객체를 담을 변수

    try {
        // 데이터베이스에 연결
        connection = await dbConnect();

        //const { idmenu, date, totalPrice } = req.body;

        // 주문 db - 주문내역 순번, 날짜, 총금액
        //await connection.query(`INSERT INTO order (idmenu, date, totalPrice) VALUES (?, ?, ?)`, [idmenu, date, totalPrice]);

        // 주문 메뉴 db - 메뉴명, 수량 
        
        
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

module.exports = { orderSave };
