const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database(':memory:');
app.use(express.json());

// initialize schema
const initSql = `CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL
);
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER,
  quantity INTEGER,
  address TEXT,
  FOREIGN KEY(product_id) REFERENCES products(id)
);`;
db.exec(initSql);

app.get('/products', (req,res)=>{
  db.all('SELECT * FROM products', [], (err, rows)=>{
    if(err) return res.status(500).json({error: err.message});
    res.json(rows);
  })
});

app.post('/products', (req,res)=>{
  const {name, description, price} = req.body;
  db.run('INSERT INTO products(name, description, price) VALUES(?,?,?)',[name,description,price], function(err){
    if(err) return res.status(500).json({error: err.message});
    res.json({id: this.lastID, name, description, price});
  });
});

app.post('/orders', (req,res)=>{
  const {product_id, quantity, address} = req.body;
  db.run('INSERT INTO orders(product_id, quantity, address) VALUES(?,?,?)',[product_id,quantity,address], function(err){
    if(err) return res.status(500).json({error: err.message});
    res.json({id: this.lastID, product_id, quantity, address});
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

