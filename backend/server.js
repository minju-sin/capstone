// server.js

const express = require('express');
const dbConnect = require('./config/dbConnect');
const cors = require('cors');

const app = express();
dbConnect();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// 메뉴판 
app.get('/menu', async (req, res) => {
    let connection; // 데이터베이스 연결 객체를 담을 변수
    try {
      // 데이터베이스에 연결
      connection = await dbConnect();
      
      // 'menu' 테이블에서 'idmenu'와 'pricemenu' 컬럼을 선택하는 쿼리를 실행
      const [results] = await connection.query('SELECT idmenu, pricemenu FROM menu');
      
      // 쿼리 결과를 JSON 형식으로 응답
      res.json(results);
    } catch (err) {
      // 쿼리 실행 중 오류가 발생하면 오류 메시지를 콘솔에 출력하고, 500 상태 코드와 함께 'Server error' 메시지를 응답
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
    } finally {
      // 데이터베이스 연결을 종료
      if (connection) {
        await connection.end();
      }
    }
});
  

app.listen(8080, () => {		// 8080번 포트로 서버 실행
    console.log("서버 실행")
});