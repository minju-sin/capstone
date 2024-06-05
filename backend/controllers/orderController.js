const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

// 주문내역 저장 API
// POST /save
const orderSave = asyncHandler(async (req, res) => {
    let connection; // 데이터베이스 연결 객체를 담을 변수

    try {
        // 데이터베이스에 연결
        connection = await dbConnect();

        const { date, totalPrice, items } = req.body;

        // 트랜잭션 시작
        await connection.beginTransaction();

        // orders 테이블에 주문 정보 저장
        const [orderResult] = await connection.query(
            `INSERT INTO orders (date, totalPrice) VALUES (?, ?)`,
            [date, totalPrice]
        );

        const orderId = orderResult.insertId;

        // service 테이블에 주문 내역 저장
        const serviceQueries = items.map(item => {
            return connection.query(
                `INSERT INTO service (idorder, idmenu, quantity) VALUES (?, ?, ?)`,
                [orderId, item.idmenu, 1]
            );
        });

        // 모든 쿼리가 완료될 때까지 기다림
        await Promise.all(serviceQueries);

        // 트랜잭션 커밋
        await connection.commit();

        res.status(201).json({ success: true, message: '주문표 저장 성공!' });
    } catch (err) {
        // 오류 발생 시 트랜잭션 롤백
        if (connection) {
            await connection.rollback();
        }
        console.error('오류 발생', err);
        res.status(500).send('서버 에러');
    } finally {
        // 데이터베이스 연결을 종료
        if (connection) {
            await connection.end();
        }
    }
});

// 영수증 조회 API
// GET /show
const orderShow = asyncHandler(async (req, res) => {
    let connection; // 데이터베이스 연결 객체를 담을 변수

    try {
        // 데이터베이스에 연결
        connection = await dbConnect();

        // 'orders' 테이블에서 순번, 거래시간, 총금액 보여주기 
        const [results] = await connection.query('SELECT idorder, date, totalPrice FROM orders');

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

module.exports = { orderSave, orderShow };
