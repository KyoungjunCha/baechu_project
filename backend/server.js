const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // cors 미들웨어 추가
const app = express();
const port = 8082;

app.use(bodyParser.json());
app.use(cors()); // 모든 출처에서의 요청 허용

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 간단한 예시: 하드코딩된 값과 일치하는지 검증
  if (username === 'user' && password === 'pass') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Login failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
