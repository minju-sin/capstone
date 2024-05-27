// ./controllers/invenController.js

const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

// 재고 관리 저장 API
// POST /save
const InvenSave = asyncHandler(async (req, res) => {
   try {
    const connection = await dbConnect();

    // 요청에서 재고 항목의 이름과 수량 추출
    const { idinventory, quantity } = req.body;

    // 데이터베이스에 새로운 재고를 추가하는 SQL 쿼리 실행
    await connection.query('INSERT INTO inventory (idinventory, quantity) VALUES (?, ?)', [idinventory, quantity]);
    
    // 성공적인 응답
    res.status(201).send('재고 추가 완료');

   } catch(err) {
    // 오류 처리
    console.error('오류 발생', err);
    res.status(500).send('서버 에러');
    
   } finally {
    // 데이터베이스 연결 종료
    if(connection) {
        await connection.end();
    }
   }
});

module.exports = { InvenSave };

