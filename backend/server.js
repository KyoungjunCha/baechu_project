// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Maria DB 
const connection = require('./db');

app.use(bodyParser.json());
app.use(cors());

const users = [];

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ success: false, message: '이미 등록된 사용자입니다.' });
  }

  const newUser = { username, password };
  users.push(newUser);
  // console.log("users test sdasda:",users);

  let query = 'INSERT INTO test (id, password) VALUES (?, ?)';
  let result =[
    username,
    password
  ]
  connection.query(query, result);

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


//임시비밀번호 전송
app.post('/forgot-password', async(req, res) => {
  const userEmail = req.body.email;

  // TODO: 여기에서 유효한 사용자 이메일인지 확인하는 로직을 추가

  // 임시 비밀번호 생성
  const temporaryPassword = Math.random().toString(36).slice(-8);

  // 이메일 전송 옵션 설정
  const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'zktmzkxh1234',
      pass: '****',
    },
  });

  const mailOptions = {
    from: 'zktmzkxh1234@naver.com',
    to: userEmail,
    subject: 'Temporary Password',
    text: `Your temporary password is: ${temporaryPassword}`,
  };

  // 이메일 전송
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

