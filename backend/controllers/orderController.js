const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

// 주문내역 저장 API
// POST /save
const orderSave = asyncHandler(async (req, res) => {
    let connection; // 데이터베이스 연결 객체를 담을 변수

    try {
        // 데이터베이스에 연결
        connection = await dbConnect();

        const { date, totalPrice, items, transactionType } = req.body;

        // 트랜잭션 시작
        await connection.beginTransaction();

        // orders 테이블에 주문 정보 저장
        const [orderResult] = await connection.query(
            `INSERT INTO orders (date, totalPrice, transactionType) VALUES (?, ?, ?)`,
            [date, totalPrice, transactionType]
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

        // 'orders' 테이블에서 순번, 거래시간, 총금액, 거래유형 보여주기 
        const [results] = await connection.query('SELECT idorder, date, totalPrice, transactionType  FROM orders');

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


// 영수증 상세 조회 API
// GET /receipt
const orderReceipt = asyncHandler(async (req, res) => {
    let connection; // 데이터베이스 연결 객체를 담을 변수

    try {
        const { idorder } = req.query; // 요청 쿼리에서 idorder를 가져옴

        // 데이터베이스에 연결
        connection = await dbConnect();

        // 'service' 테이블에서 주문순번에 해당하는 영수증 상세 정보 조회
        const [orderDetails] = await connection.query('SELECT s.idorder, s.idmenu, s.quantity, m.pricemenu FROM service s INNER JOIN menu m ON s.idmenu = m.idmenu WHERE s.idorder = ?', [idorder]);

        // 'order' 테이블에서 주문 정보 조회
        const [orderInfo] = await connection.query('SELECT idorder, date, totalPrice, transactionType FROM `orders` WHERE idorder = ?', [idorder]);

        if (!orderInfo.length) {
            return res.status(404).json({ message: '영수증을 찾을 수 없습니다.' });
        }

        // 영수증 상세 정보를 조합하여 응답 데이터 생성
        const receiptData = {
            idorder: orderInfo[0].idorder,
            date: orderInfo[0].date,
            total: orderInfo[0].totalPrice,
            transactionType: orderInfo[0].transactionType,
            items: orderDetails.map(item => ({
                name: item.idmenu, // 메뉴 이름은 menu 테이블의 기본키로 service의 외래키로 지정함
                quantity: item.quantity,
                discount: 0, // 할인 정보는 없으므로 0으로 설정
                price: item.pricemenu  // 각 메뉴에 대한 가격은 idmenu 외래키를 이용해서 pricemenu 정보를 얻음
            }))
        };

        // 쿼리 결과를 JSON 형식으로 응답
        res.json(receiptData);
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

module.exports = { orderSave, orderShow, orderReceipt };
