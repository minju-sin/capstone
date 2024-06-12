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

        // 원두 재고 감소 - 커피 종류 모두
        const coffeeItems = ['아메리카노', '바닐라라떼', '아포가토', '카페라떼', '카페모카', '카푸치노', '돌체라떼'];
        const coffeeOrders = items.filter(item => coffeeItems.includes(item.idmenu));
        if (coffeeOrders.length > 0) {
            const totalCoffeeQuantity = coffeeOrders.reduce((total, item) => total + item.quantity, 0);
            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "원두"',
                [totalCoffeeQuantity]
            );

            // 원두 재고 확인
            const [stockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "원두"'
            );

            const stockQuantity = stockResults[0].quantity;
            if (stockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 원두 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 우유 재고 감소 - 커피 종류 모두
        const milkItems = ['녹차라떼', '바닐라라떼', '딸기라떼', '카페라떼', '카페모카', '카푸치노', '돌체라떼'];
        const milkOrders = items.filter(item => milkItems.includes(item.idmenu));
        if (milkOrders.length > 0) {
            const totalMilkQuantity = milkOrders.reduce((total, item) => total + item.quantity, 0);
            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "우유"',
                [totalMilkQuantity]
            );

            // 우유 재고 확인
            const [milkstockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "우유"'
            );

            const milkstockQuantity = milkstockResults[0].quantity;
            if (milkstockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 우유 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 바닐라 재고 감소 - 바닐라 라떼
        const vanillaOrders = items.filter(item => item.idmenu === '바닐라라떼');
        if (vanillaOrders.length > 0) {
            const totalVanillaQuantity = vanillaOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "바닐라"',
                [totalVanillaQuantity]
            );

            // 바닐라 재고 확인
            const [vanillaStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "바닐라"'
            );

            const vanillaStockQuantity = vanillaStockResults[0].quantity;

            if (vanillaStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 바닐라 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 연유 재고 감소 - 돌체라떼, 녹차라떼
        const condensedItems = ['돌체라떼', '녹차라떼'];
        const condensedOrders = items.filter(item => condensedItems.includes(item.idmenu));
        if (condensedOrders.length > 0) {
            const totalCondensedQuantity = condensedOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "연유"',
                [totalCondensedQuantity]
            );

            // 바닐라 재고 확인
            const [condensedStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "연유"'
            );

            const condensedStockQuantity = condensedStockResults[0].quantity;

            if (condensedStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 연유 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 초코시럽 재고 감소 - 카페모카
        const chocoOrders = items.filter(item => item.idmenu === '카페모카');
        if (chocoOrders.length > 0) {
            const totalchocoQuantity = chocoOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "초코시럽"',
                [totalchocoQuantity]
            );

            // 초코시럽 재고 확인
            const [chocoStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "초코시럽"'
            );

            const chocoStockQuantity = chocoStockResults[0].quantity;

            if (chocoStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 초코시럽 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 아이스크림 재고 감소 - 아포카토
        const iceOrders = items.filter(item => item.idmenu === '아포카토');
        if (iceOrders.length > 0) {
            const totalIceQuantity = iceOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "아이스크림"',
                [totalIceQuantity]
            );

            // 아이스크림 재고 확인
            const [iceStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "아이스크림"'
            );

            const iceStockQuantity = iceStockResults[0].quantity;

            if (iceStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 아이스크림 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 콜드브루 재고 감소 - 아포카토
        const coldOrders = items.filter(item => item.idmenu === '콜드브루');
        if (coldOrders.length > 0) {
            const totalColdQuantity = coldOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "콜드브루"',
                [totalColdQuantity]
            );

            // 콜드브루 재고 확인
            const [coldStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "콜드브루"'
            );

            const coldStockQuantity = coldStockResults[0].quantity;

            if (coldStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 콜드브루 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 녹차 재고 감소 - 녹차라떼
        const nokOrders = items.filter(item => item.idmenu === '녹차라떼');
        if (nokOrders.length > 0) {
            const totalNokQuantity = nokOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "녹차"',
                [totalNokQuantity]
            );

            // 녹차 재고 확인
            const [nokStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "녹차"'
            );

            const nokStockQuantity = nokStockResults[0].quantity;

            if (nokStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 녹차 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 딸기 재고 감소 - 딸기라떼
        const strawOrders = items.filter(item => item.idmenu === '딸기라떼');
        if (strawOrders.length > 0) {
            const totalStrawQuantity = strawOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "딸기"',
                [totalStrawQuantity]
            );

            // 딸기 재고 확인
            const [strawStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "딸기"'
            );

            const strawStockQuantity = strawStockResults[0].quantity;

            if (strawStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 딸기 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }

        // 유자 재고 감소 - 유자차
        const ujaOrders = items.filter(item => item.idmenu === '유자차');
        if (ujaOrders.length > 0) {
            const totalUjaQuantity = ujaOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "유자"',
                [totalUjaQuantity]
            );

            // 유자 재고 확인
            const [ujaStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "유자"'
            );

            const ujaStockQuantity = ujaStockResults[0].quantity;

            if (ujaStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 유자 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }


        // 설탕시럽 재고 감소 - 유자차
        const sugarOrders = items.filter(item => item.idmenu === '딸기라떼');
        if (sugarOrders.length > 0) {
            const totalSugarQuantity = sugarOrders.reduce((total, item) => total + item.quantity, 0);

            await connection.query(
                'UPDATE inventory SET quantity = quantity - ? WHERE idinventory = "설탕시럽"',
                [totalSugarQuantity]
            );

            // 설탕시럽 재고 확인
            const [sugarStockResults] = await connection.query(
                'SELECT quantity FROM inventory WHERE idinventory = "설탕시럽"'
            );

            const sugarStockQuantity = sugarStockResults[0].quantity;

            if (sugarStockQuantity <= 5) {
                // 재고 부족 알림
                res.status(201).json({ success: true, message: '주문표 저장 성공! 설탕시럽 재고 부족!' });
                // 트랜잭션 커밋
                await connection.commit();
                return;
            }
        }


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