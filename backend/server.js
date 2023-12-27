const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./baechu-83ecd-firebase-adminsdk-z3pu7-93130182a2.json');
const connection = require('./db');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [];

async function sendPushNotification(deviceToken, title, body) {
  const message = {
    token: deviceToken,
    notification: {
      title: title,
      body: body,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('푸시 알림을 성공적으로 보냈습니다:', response);
  } catch (error) {
    console.error('푸시 알림 보내기 실패:', error);
  }
}

app.post('/signup', async (req, res) => {
  const { username, password, deviceToken } = req.body;

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ success: false, message: '이미 등록된 사용자입니다.' });
  }

  const newUser = { username, password };
  users.push(newUser);

  let query = 'INSERT INTO test (id, password) VALUES (?, ?)';
  let result = [username, password];
  connection.query(query, result);

  try {
    // 회원가입 성공 시 푸시 알림 보내기
    await sendPushNotification(deviceToken, '회원가입 완료', '회원가입이 성공적으로 완료되었습니다.');
  } catch (error) {
    console.error('푸시 알림 보내기 실패:', error);
  }

  return res.status(201).json({ success: true, message: '회원가입이 성공적으로 완료되었습니다.' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    return res.json({ success: true, message: '로그인이 성공적으로 완료되었습니다.' });
  } else {
    return res.status(401).json({ success: false, message: '유효하지 않은 사용자입니다.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
