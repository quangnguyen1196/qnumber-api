const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/v1/find-phone', (req, res) => {
  const link = req.body.link || 'no link';
  res.json({
    phone: "0812 345 678",
    fullName: "Nguyễn Văn A",
    location: "Hải Phòng",
    telco: "Viettel",
    comments: [
      "Tôi muốn mua xe",
      "Giá bao nhiêu?",
      "Xem hộp số",
      "Lăn bánh ra sao?",
      "Xforce bản cao cấp"
    ]
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});