// backend/src/routes/api.js
const express = require('express');
const router = express.Router();

// 예시: CRUD 라우트
router.get('/data', (req, res) => {
  // Read 데이터 처리
  res.json({ message: 'Read data' });
});

router.post('/data', (req, res) => {
  // Create 데이터 처리
  const newData = req.body;
  res.json({ message: 'Create data', data: newData });
});

router.put('/data/:id', (req, res) => {
  // Update 데이터 처리
  const dataId = req.params.id;
  const updatedData = req.body;
  res.json({ message: `Update data with id ${dataId}`, data: updatedData });
});

router.delete('/data/:id', (req, res) => {
  // Delete 데이터 처리
  const dataId = req.params.id;
  res.json({ message: `Delete data with id ${dataId}` });
});

module.exports = router;
