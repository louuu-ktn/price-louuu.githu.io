const express = require('express');
const app = express();
const port = 3000;

// Middleware เพื่อจัดการ POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/compare', (req, res) => {
  const products = req.body.products; // รับข้อมูลสินค้าจากฟอร์ม
  const results = products.map(product => {
    return {
      name: product.name,
      pricePerUnit: (product.price / product.quantity).toFixed(2),
      pricePerKg: (product.price / product.weight).toFixed(2)
    };
  });
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running at http://192.168.1.70:5500/index.html`);
});
